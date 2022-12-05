import User from '../../model/userSchema';

export default async function handler(req, res){
    try {
        const users = await User.find({})
        
        if(!users) return res.status(404).json( { error: "Data not Found"})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json( { error : "Error While Fetching Data"})
    }
}