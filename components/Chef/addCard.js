import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState, useEffect , useRef} from "react";
import Script from 'next/script';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);




const AddCard = () => {


  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity,setQuantity] = useState(null);
  const [image, setImage] = useState(null);

  const handleChangeName = (event) => {
    setName(event.target.value);
    };
    const handleChangeDescription = (event) => {
      setDescription(event.target.value);
      };
      const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
        };
    
      const handleChangePrice = (event) => {
        setPrice(event.target.value);
        };
      

  const [categorie, setCategorie] = React.useState('');
  const handleChange = (event) => {
  setCategorie(event.target.value);
  };

  

  const handleSubmit  =  () => {
      let obj = {
          categorie:categorie,
          name : name,
          description : description,
          price : price,
          quantity:quantity,
          image : image,
          
      }       
      // const response = await fetch('/api/pages/api/additem',{
      //   method : 'POST',
      //   body : obj,

      // })
    

  console.log(obj);
  }


        

        const cloudinaryRef = useRef();
        const widgetRef = useRef();
        useEffect(()=>{
          cloudinaryRef.current = window.cloudinary;
          console.log(cloudinaryRef.current)
          widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dkqjojajg', 
            uploadPreset: 'MyChefImages',
        },function (error,result){console.log(result);
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setImage(result.info.secure_url);
            
            console.log(result.info.secure_url);
            document
              .getElementById("uploadedimage")
              .setAttribute("src", result.info.secure_url);
          }
        });
        },[])
        
  
    
  return (
    
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
      
      
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      action='/api/additem' 
      method='post'
    >
      <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categorie}
          label="Categorie"
          onChange={handleChange}
        >
          <MenuItem value={"Starters"}>Starters</MenuItem>
          <MenuItem value={"Salads"}>Salads</MenuItem>
          <MenuItem value={"MainCourses"}>Main Courses</MenuItem>
          <MenuItem value={"Desserts"}>Desserts</MenuItem>
          <MenuItem value={"Drinks"}>Drinks</MenuItem>
        </Select>
      </FormControl>

        </Box>
      <Box>
      
        <TextField
          required
          id="outlined-required"
          label="Title"
          value={name}
          onChange = {(e) => handleChangeName(e)} 
          defaultValue=""
        />
       
        </Box>
        <Box>
           <TextField
          required
          id="outlined-required"
          label="Description"
          value={description}
          onChange = {(e) => handleChangeDescription(e)} 
          defaultValue=""
        />
        </Box>
           <TextField
          required
          id="outlined-required"
          label="Price"
          defaultValue=""
          value={price}
          
          onChange = {(e) => handleChangePrice(e)} 
        />
        
        <Box>
        <Script src="https://upload-widget.cloudinary.com/global/all.js" />
  
        <Button  onClick={()=>widgetRef.current.open()}>Upload</Button>

        <Box mt={2} textAlign="center">
          
          <img id="uploadedimage" src=""></img>
        </Box>
      {/* )} */}
      </Box>
    </Box>

      </CardContent>
      

      <CardActions>
        <Button size="small" onClick={handleSubmit}>Add </Button>
      </CardActions>
    </Card>
    
  );
}

export default AddCard;