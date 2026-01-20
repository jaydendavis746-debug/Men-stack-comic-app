import express from 'express';
const router = express.Router();
import Genre from '../models/genres.js';

router.get('/', async (req, res)=>{
    const genres = await Genre.find().sort({name:1})
    res.render('genres/index.ejs', {genres});
});

router.get('/new', (req, res)=>{
    res.render('genres/new.ejs');
});

router.post('/', async(req, res)=>{
 try  {
     await Genre.create(req.body)
    res.redirect('/genres')
 } catch (error){
    console.log(error)
    
}
});

router.get('/:genreId', async(req, res)=>{
    const genre = await Genre.findById(req.params.genreId)
 res.render('genres/show.ejs', {genre})
})

export default router;