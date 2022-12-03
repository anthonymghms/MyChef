import mongoose from "mongoose";



const itemSchema = new mongoose.Schema({
    // user_id : { type: Schema.Types.ObjectId, ref: 'User' },
    categorie : String,
    description : String,
    image : String,
    name : String,
    price: Number,
    quantity: Number,
    
})

// const categorieSchema = new mongoose.Schema({
    
//         categorie_name: String,
//         items: { 
//             itemSchema
//          },
        
      
// })

module.exports = mongoose.models.Item || mongoose.model('Item',itemSchema)



