import connect from "../../lib/mongodb";
import User from '../../model/userSchema';
connect()


export default async function handler(req,res){
        const user = await User.create(req.body)
        res.send("Hello "+user.firstName)
        if(!user){
            return res.json({code: 'User not created'})
        }
    
}