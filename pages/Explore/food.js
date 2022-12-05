import MenuAppBar from "../../components/Chef/NavBar/navbar";
import FoodCard from "../../components/Chef/card";
import { Box } from "@mui/system";
import { Button, experimentalStyled } from '@mui/material'
import { getUsers } from "../../lib/helper";
import { getFood } from "../../lib/foodHelper";
import { useEffect, useState } from "react";



export default function FoodHomePage() {
    const [items,setItems] = useState({})
    useEffect(() => {
        getFood().then((item) => setItems(item))
    })
    
    const newItems = Object.values(items)

    return (
         <>
        <MenuAppBar/>
        <div style={{display:'flex',flexWrap:'wrap',gap:'50px'}}>
        {newItems.map((item) => <FoodCard key={item._id} name={item.name} description ={item.description} image ={item.image} price= {item.price}/>)}

        </div>
       
        </>
    );
}