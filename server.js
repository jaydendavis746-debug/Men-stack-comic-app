
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

import mongoose from 'mongoose'
import methodOverride from 'method-override'
import session from 'express-session'
import morgan from 'morgan'
import isSignedIn from './middleware/is-signed-in.js'
import passUserToView from './middleware/pass-user-to-views.js'
import path from 'path'
import { fileURLToPath } from 'url';
const app = express()
import authController from './controllers/auth.js'
import comicsController from './controllers/comics.js'
import genresController from './controllers/genres.js'
import requestsController from './controlllers/requests.js'

import Comic from './models/comics.js'

const _dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(_dirname, 'public')));

const port = process.env.PORT ? process.env.PORT : '3000';

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});



app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
 app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passUserToView);

app.get('/', async (req, res)=>{ 
const comics = await Comic.find().sort({ likedByUsers: "desc" }).limit(3);
res.render('index.ejs', {user: req.session.user, comics})
})


app.get('/report', (req, res)=>{

  res.render('report/report.ejs')
} )

app.use('/auth', authController);
app.use(isSignedIn);
app.use('/comics', comicsController);
app.use('/genres', genresController);
app.use('/requests', requestsController )


app.listen(port,  () =>{
     console.log(`The express app is ready on port ${port}!`);

})