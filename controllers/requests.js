import express from 'express'
const router = express.Router()
import Request from '../models/requests.js'
import User from '../models/users.js'
import { request } from 'http'


router.get('/', (req, res) => {
    res.render('requests/index.ejs')
})


router.post('/', async (req, res)=>{
     console.log(req.body)
    req.body.publisher = req.session.user._id
    await Request.create(req.body)
    res.redirect('/')
})


router.get('/show.ejs', async (req, res) => {

const requests = await Request.find().sort({createdAt: -1});

return user == req.session.user._id;

res.render('requests/show.ejs', {requests});
})

export default router