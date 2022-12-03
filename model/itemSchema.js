import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
    categorie : {
        type: String,
        required:true,
    },
    name :{
        type: String,
        required:true,

    },
    description : {
        type: String,
        required:true,

    },
    price: {
        type: Number,
        required:true,
    },
    
})

module.exports = mongoose.models.Item || mongoose.model('Item',itemSchema)



