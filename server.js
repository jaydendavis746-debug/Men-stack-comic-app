
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import mongoose from 'mongoose'
import methodOverride from 'method-override'
import session from 'express-session'
import morgan from 'morgan'
import isSignedIn from './middleware/is-signed-in.js'
import passUserToView from './middleware/pass-user-to-views.js'

import authController from './controllers/auth.js'
import comicsController from './controllers/comics.js'
import genresController from './controllers/genres.js'


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

app.get('/', (req, res)=>{ 

res.render('index.ejs', {user: req.session.user})
})

app.use('/auth', authController);
app.use(isSignedIn);
app.use('/comics', comicsController);
app.use('/genres', genresController);


app.listen(port,  () =>{
     console.log(`The express app is ready on port ${port}!`);

})