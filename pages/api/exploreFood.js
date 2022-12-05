import Catalog from '../../model/catalogSchema';


export default async function handler(req, res){
        try {
        const items = await Catalog.find({})
        
        if(!items){
            res.status(404).json( { error: "Data not Found"})
        }
        res.status(200).json(items)
    } catch (error) {
        res.status(404).json( { error : "Error While Fetching Data"})
    }
}