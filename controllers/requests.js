import express from 'express'
const router = express.Router()
import Request from '../models/requests.js'
import User from '../models/users.js'



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

const userRequests = await Request.find({ publisher : req.session.user._id})

res.render('requests/show.ejs', { requests, userRequests } );
})


router.delete('/:requestId', async (req, res)=>{

    await Request.findByIdAndDelete(req.params.requestId)
    res.redirect('/');
})

export default router