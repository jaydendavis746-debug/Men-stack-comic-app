import express from 'express'
const router = express.Router()
import Genre from '../models/genres.js'
import Comic from '../models/comics.js'
import User from '../models/users.js'

router.get('/', async(req, res)=> {
const comics = await Comic.find()
    res.render('comics/index.ejs',{comics})
})



router.get('/new', async (req, res)=>{
    const genres = await Genre.find().sort({name:1})
    res.render('comics/new.ejs', { genres });
})

router.post('/', async (req, res)=>{
    req.body.ongoing = req.body.ongoing === 'on'
    await Comic.create(req.body)
    res.redirect('/comics')

})

export default router;