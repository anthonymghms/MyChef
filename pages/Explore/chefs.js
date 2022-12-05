import MenuAppBar from "../../components/Chef/NavBar/navbar";
import { getUsers } from "../../lib/helper";
import { useEffect, useState } from "react";
import ChefCard from "../../components/Chef/chefCard";



export default function ChefHomePage() {
    const [chefs,setChefs] = useState({})
    useEffect(() => {
        getUsers().then((chef) => setChefs(chef))
    })
    
    const newChefs = Object.values(chefs)

    return (
         <>
        <MenuAppBar/>
        <div style={{display:'flex',flexWrap:'wrap',gap:'50px'}}>
        {newChefs.map((chef) => <ChefCard key={chef._id} name={chef.firstName + " " + chef.lastName} description ={chef.description} price= {chef.price}/>)}

        </div>
       
        </>
    );
}