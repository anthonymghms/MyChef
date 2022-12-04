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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddCard = () => {

  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [test, setTest] = useState(null);

  const handleChangeName = (event) => {
    setName(event.target.value);
    };
    const handleChangeDescription = (event) => {
      setDescription(event.target.value);
      };
      const handleChangePrice = (event) => {
        setPrice(event.target.value);
        };
        const handleChangeTest = (event) => {
          setTest(event.target.value);
          };
          const handleChangeImage = (img) => {
            setImage(img);
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
          image : image,
          test:test,
      }       
      // const response = await fetch('/api/pages/api/addcatalog',{
      //   method : 'POST',
      //   body : obj,

      // })
    
console.log("-------");
  console.log(obj);
  console.log("-------");
  }


        

        const cloudinaryRef = useRef();
        const widgetRef = useRef();
        useEffect( ()=> {
          cloudinaryRef.current = window.cloudinary;

          console.log(cloudinaryRef.current)
           widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dkqjojajg', 
            uploadPreset: 'MyChefImages',
        },
         function (error,result){
          console.log(result);
          if (!error && result && result.event === "success") {
           console.log(result.info.url);
              setImage(result.info.url);
            console.log("here is the image url set: " + image);
          }
        });
        },[])
        
  
    
  return (

    
  
    <Card sx={{ maxWidth: 500 ,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      overflowY: "scroll",}}>
       
      <CardContent>
      
      
        <Box
      component="form"
      sx={{
        
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      action='/api/addcatalog' 
      method='post'
    >
      <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categorie}
          name="categorie"
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
          name='name'
          onChange = {(e) => handleChangeName(e)} 
          defaultValue=""
        />
       
        </Box>
        <Box>
      
      <TextField
        required
        id="outlined-required"
        label="test"
        value={test}
        name='test'
        onChange = {(e) => handleChangeTest(e)} 
        defaultValue=""
      />
     
      </Box>
        <Box>
           <TextField
          required
          id="outlined-required"
          label="Description"
          value={description}
          name='description'
          onChange = {(e) => handleChangeDescription(e)} 
          defaultValue=""
        />
        </Box>
           <TextField
          required
          id="outlined-required"
          label="Price"
          defaultValue=""
          name='price'
          value={price}
          
          onChange = {(e) => handleChangePrice(e)} 
        />
       
        <Box>
       
  
        <Button  onClick={()=>widgetRef.current.open()}  >Upload</Button>

        <Box mt={2} textAlign="center">  
          <img id="uploadedimage" src={image} value={image} ></img>
          <TextField
          sx={{display:'none'}}
          required
          id="outlined-required"
          value={image}
          name='image'
          defaultValue="">{image}</TextField>
        </Box>
      {/* )} */}
      </Box>
      <CardActions>
        <Button size="small" onClick={handleSubmit} type='submit'>Add </Button>
      </CardActions>
    </Box>

      </CardContent>
      

    </Card>
    
  );
}

export default AddCard;