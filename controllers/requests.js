import express from 'express'
const router = express.Router()
import Request from '../models/requests.js'
import User from '../models/users.js'
import { request } from 'http'


router.get('/', (req, res) => {
    res.render('requests/index.ejs')
})


router.post('/', async (req, res)=>{
    req.body.publisher = req.session.user._id
    await Request.create(req.body)
    res.redirect('/')
})


export default router