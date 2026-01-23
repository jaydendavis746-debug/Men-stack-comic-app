import express from 'express'
const router = express.Router()
import Request from '../models/requests.js'
import User from '../models/users.js'


router.get('/', (req, res) => {
    res.render('requests/index.ejs')
})


export default router