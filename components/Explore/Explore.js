import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

const content = [
    {title:'Chefs',description:"View the city's favourite chefs",image:'./images/cooking-explore.jpg',href:'/Explore/chefs'},
    {title:'Food',description:"Explore the city's top dishes",image:'./images/food-explore.jpg',href:'/Explore/food'}
]

class Explore extends React.Component {
    
    renderCard(card,key){
        return(
            
            <Card sx={{ maxWidth: 345 }} key={key} className="explore-card">
                <Link href={card.href}>
                <CardActionArea >
                    <CardMedia
                    component="img"
                    height="140"
                    image={card.image}
                    alt="."
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {card.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Link>
            </Card>
            
        )
    }

    renderAllCards(){
        return(
            content.map((card,key) => this.renderCard(card,key))
        )
    }
    
    render(){
        return (
            <div className='explore-container' id='explore'>
                {this.renderAllCards()}
            </div>

        )
    }
};

export default Explore;