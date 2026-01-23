import express from 'express'
const router = express.Router()
import Request from '../models/requests.js'
import User from '../models/users.js'


router.get('/', (req, res) => {
    res.send('This is the page to requets for help')
})


export default router