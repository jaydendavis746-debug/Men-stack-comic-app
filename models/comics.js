import mongoose from "mongoose";


const comicSchema = mongoose.Schema({

    name:{
        type: String,
        required: true,
    },

    completed: Boolean,

    ongoing: Boolean,

    chapters: {
        type: Number,
        min: 0,
    },

    category:{
        type: String,
        required: true,
    },

    country: String,

    author:{
        type: String,
        required: true,
    },

    publisher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    genres:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre',
    }],

    description: {
        type: String,
    
    },
     likedByUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],

});

const Comic = mongoose.model('Comic', comicSchema);

export default Comic;