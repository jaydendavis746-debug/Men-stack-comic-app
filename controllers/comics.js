import express from 'express'
const router = express.Router()
import Genre from '../models/genres.js'
import Comic from '../models/comics.js'
import User from '../models/users.js'

router.get('/', (req, res)=> {

    res.render('comics/index.ejs')
})



router.get('/new', async (req, res)=>{
    const genres = await Genre.find().sort({name:1})
    res.render('comics/new.ejs', { genres });
})

router.post('/', async (req, res)=>{
    await Comic.create(req.body)
    res.redirect('/comics')

})

export default router;