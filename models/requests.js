import mongoose from "mongoose";

const requestSchema = mongooose.Schema({

    requestType: {
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
    },

    publisher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})