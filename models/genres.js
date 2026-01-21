import mongoose from "mongoose";


const genreSchema = mongoose.Schema({

    name:{
        type: String,
        required: true,

    },
    description:{
        type: String, 
        required: true,
        
    },

    
});

genreSchema.virtual('comics', {
  ref: 'Comic',
  localField: '_id',
  foreignField: 'genres'
}); 

const Genre = mongoose.model('Genre', genreSchema)

export default Genre