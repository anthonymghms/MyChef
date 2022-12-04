import mongoose from "mongoose";


const catalogSchema = new mongoose.Schema({
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
    image:{
        type:String,
        required: true,
    },
    test:{
        type:String,
        required: true,
    }
    
})

module.exports = mongoose.models.Catalog || mongoose.model('Catalog',catalogSchema)



