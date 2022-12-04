import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import users from '../../pages/api/users.json'
import Link from 'next/link';



export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>

        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.name}
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}


export const Tab1 = () => {
    return (
        <div style={{'display':'grid','gridTemplateColumns':'repeat(3, minmax(0, 1fr))'}}>
          
        </div>
    )
}