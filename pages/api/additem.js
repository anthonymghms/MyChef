import connect from "../../lib/mongodb";
import Item from '../../model/itemSchema';

connect()

export default async function handler(req,res){
        const item = await Item.create(req.body)
        // res.redirect('/welcome')
        if(!item){
            return res.json({code: 'item not added'})
        }
    
}