import connect from "../../lib/mongodb";
import Catalog from '../../model/catalogSchema';
import User from '../../model/userSchema';
import jwt from 'jsonwebtoken'
import {getToken} from '../../components/ResponsiveAppBar/registrationForm'

connect()

export default async function handler(req,res){
        console.log(req);
        const catalog = await Catalog.create(req.body)
        const user = await User.findById("638cd1c58b4de4fd541646d7").exec()
        User.findByIdAndUpdate(user._id,{$push: { items: catalog}}).exec();
        if(!catalog){
            return res.json({code: 'catalog not added'})
        }
        console.log("Added")
    
}