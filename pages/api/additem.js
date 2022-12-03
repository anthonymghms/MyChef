import connect from "../../lib/mongodb";
import Item from '../../model/itemSchema';

// connect()

// export default async function handler(req,res){
//    const {email,password} = req.body
//    const user = await User.findOne({email,password})
//    if(!user){ 
//       return res.json({status:"Not able to find user"})
//    }
//    else {
//     res.redirect('/welcome')
//    }
// }  

connect()


export default async function handler(req,res){
        const item = await Item.create(req.body)
        res.redirect('/welcome')
        if(!item){
            return res.json({code: 'item not added'})
        }
    
}