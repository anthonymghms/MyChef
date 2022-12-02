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
import { useState, useEffect } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);




const AddCard = () => {

        const [selectedImage, setSelectedImage] = useState(null);
        const [imageUrl, setImageUrl] = useState(null);
      
        useEffect(() => {
          if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
          }
        }, [selectedImage]);
    
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        
      
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue=""
        />
        </Box>
        <Box>
           <TextField
          required
          id="outlined-required"
          label="Description"
          defaultValue=""
        />
        </Box>
           <TextField
          required
          id="outlined-required"
          label="Price"
          defaultValue=""
        />
        <Box>
            <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />

      <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
          <img src={imageUrl} alt={selectedImage.name} height="100px" />
        </Box>
      )}
      </Box>
    </Box>

      </CardContent>
      

      <CardActions>
        <Button size="small">Add </Button>
      </CardActions>
    </Card>
  );
}

export default AddCard;