import connect from "../../lib/mongodb";
import User from '../../model/userSchema';
import jwt from 'jsonwebtoken'

connect()
const KEY = 'baiabiannjavshvukvuvuicucuocuoyvuoyvoi'

export default async function handler(req,res){
   const {email,password} = req.body
   const user = await User.findOne({email,password})
   if(!user){
      return res.json({status:"Not able to find user"})
   }
   return res.json({
      token: jwt.sign({
         email,
         password
      }, KEY)
   })
}  