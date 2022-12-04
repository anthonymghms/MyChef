import connect from "../../lib/mongodb";
import Catalog from '../../model/catalogSchema';

connect()

export default async function handler(req,res){
    console.log(req);
        const catalog = await Catalog.create(req.body)
        // res.redirect('/welcome')
        if(!catalog){
            return res.json({code: 'catalog not added'})
        }
    
}