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
     req.body.completed= req.body.completed === 'on'
      req.body.publisher = req.session.user._id
    await Comic.create(req.body)
    res.redirect('/comics')

})

router.get('/:comicId', async (req, res)=>{
    try{
         const comic = await Comic.findById(req.params.comicId).populate('genres')
      console.log(comic)
    res.render('comics/show.ejs', {comic})
} catch(error){
    console.log(error)
    res.redirect('/comics')
}
})


router.delete('/:comicId', async (req, res)=>{
    try{
        
        const comic = await Comic.findById(req.params.comicId);
        if(comic.publisher.equals(req.session.user._id)){
            console.log('permission granted')
            await Comic.deleteOne();
            res.redirect('/comics')
        }else {
            res.send('You do not have the permission to delete this comic')
    }

    }catch(error){
        console.log(error)
    }
})

router.get('/:comicId/edit', async (req, res) => {
  const comic = await Comic.findById(req.params.comicId);
  const genres = await Genre.find().sort({name: 1});

  res.render('comics/edit.ejs', { comic, genres });
});

router.put('/:comicId', async (req, res)=>{
    
    req.body.ongoing = req.body.ongoing === 'on'
     req.body.completed= req.body.completed === 'on'
      req.body.publisher = req.session.user._id
     const comic = await Comic.findById(req.params.comicId);
     console.log('publisher:', comic.publisher);

    if (comic.publisher.equals(req.session.user._id)) {
      await comic.updateOne(req.body);
      res.redirect('/comics');
} else {
    return res.send('Not authorized')
}
});


export default router;