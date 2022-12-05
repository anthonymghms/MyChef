import jwt from 'jsonwebtoken'

const KEY = 'baiabiannjavshvukvuvuicucuocuoyvuoyvoi'

export default function handler(req, res){
    const {token} = req.body
    const {auth} = jwt.verify(token, KEY)
}