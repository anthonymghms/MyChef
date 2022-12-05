import connect from "../../lib/mongodb";
import User from '../../model/userSchema';
import jwt from 'jsonwebtoken'


export default async function handler(req,res){
    if(req){
        //return res.json({hi:"HI"})
        res.redirect('/')
    }
    res.redirect('/',404)
 }  