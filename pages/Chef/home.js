import MenuAppBar from "../../components/Chef/NavBar/navbar";

import FoodCard from "../../components/Chef/card";

import AddButton from "../../components/Chef/addButton";
import AddCard from "../../components/Chef/addCard";
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';


const ChefHomePage = () => {
    return (
         <>
        <MenuAppBar/>
       
        <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between'}}>
                  <h1>Listed items </h1>  
                  <AddButton/>
                  </Box>
        
        {/* <AddCard/> */}

        <Box sx={{display: 'flex',justifyContent: 'space-between'}}>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        </Box>


        <Box sx={{display: 'flex',justifyContent: 'space-between'}}>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        </Box>

        <Box sx={{display: 'flex',justifyContent: 'space-between'}}>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        </Box>
        </>
    );
}
 
export default ChefHomePage;