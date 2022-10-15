import * as React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation"
import { 
    Autoplay,
    Navigation 
} from "swiper";

const cardInfo = [
    {image:'./images/image.png',title:'Burgers',chefs:'26 chefs'},
    {image:'./images/image.png',title:'Pizza',chefs:'19 chefs'},
    {image:'./images/image.png',title:'Pasta',chefs:'21 chefs'},
    {image:'./images/image.png',title:'Sandwiches',chefs:'43 chefs'},
]

class Categories extends React.Component{
    renderTitle(){
        return(
            <div className='categories-title-container'>
                <h2 className='categories-title'>Categories</h2>
                <div className='categories-description'>
                    <h6 className='description-text'>Explore curated lists of top restaurants, cafes, pubs, and bars in Beirut, based on trends</h6>
                    <a href='#top' className='categories-btn'>
                        <span className='categories-btn-text'>
                            All categories in Beirut
                            <i>
                            <ArrowRightIcon/>
                            </i>
                        </span>
                    </a>
                </div>
            </div>
        )
    }
    
    renderCard(card,key){
        return(
            <SwiperSlide key={key}>
            <Card className="card-container" >
            <CardActionArea className="card-actionarea">
              <CardMedia
                component="img"
                image={card.image}
                alt="Categories"
                className='card-media'
                />
              <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div" className='card-content-title'>
                  {card.title}
                </Typography>
                <Typography variant="body2" className="card-content-text">
                  {card.chefs}
                  <i>
                    <ArrowRightIcon/>
                </i>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        )
    }
    
    renderAllCards(){
        return cardInfo.map((card,key) => this.renderCard(card,key))
    }

    renderSwiper(){
        return (
            <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[
                Autoplay,
                Navigation
                ]}
            className="mySwiper"
            slidesPerView={4}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            speed={1000}
            navigation={true}
            style={{
                "--swiper-theme-color":'white',
                "--swiper-navigation-size":"20px"
            }}>
                {this.renderAllCards()}
            </Swiper>
        )
    }


    render(){
        return(
            <div className='categories-container'>
                {this.renderTitle()}
                {this.renderSwiper()}
            </div>
        )
    }
};

export default Categories