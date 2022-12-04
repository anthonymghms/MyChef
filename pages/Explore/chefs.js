import * as React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {
    Autoplay,
} from "swiper";
import { getUsers } from '../../lib/helper';
import { useState} from "react";
import { set } from 'mongoose';
// import {useQuery} from 'react-query'
const cardInfo = [
    {image:'./images/burger.jpg',title:'Burgers',chefs:'26 chefs'},
    {image:'./images/pizza.jpg',title:'Pizza',chefs:'19 chefs'},
    {image:'./images/pasta.jpg',title:'Pasta',chefs:'21 chefs'},
    {image:'./images/sandwiches.jpg',title:'Sandwiches',chefs:'43 chefs'},
]
// var userInfo 
//  getUsers().then(res => userInfo=res)

// const [users, setUsers] = useState([]);
// const {firstName , lastName} = useQuery('users', getUsers)
// getUsers().then((res) =>  setUsers(res))

class Categories extends React.Component{
   
    renderTitle(){
//     //   getUsers().then((res) => {for (var i = 0; i < res.length; i++) { console.log(res[i].firstName +" " + res[i].lastName); }})
    
//     console.log(users)
//       console.log("Hello")
 
//       getUsers().then(res =>  console.log(res.map((chef)=>console.log(chef.firstName))))
//     //   console.log("userinfo = " + users )
//     console.log("users: "+ users)
// console.log(cardInfo)


        return(
            <div className='categories-title-container'>
                
                <h2 className='categories-title'>Categories</h2>
                <div className='categories-description'>
                    <h6 className='description-text'>Explore curated lists of top dishes in Beirut, based on trends</h6>
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
        const [users, setUsers] = useState([]);
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
                                    <ArrowRightIcon style={{marginBottom: '0px'}}/>
                                </i>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </SwiperSlide>
        )
    }

    renderAllCards(){
       
    
    getUsers().then((res) => {
            setUsers(res)}
            
            )

            conaole.log(users)

        // return {firstName , lastName}.map((card,key) => this.renderCard(card,key))
        return cardInfo.map((card,key) => this.renderCard(card,key))
        // return  getUsers().then((res) =>  res.map((card,key) => this.renderCard(card,key)))
    }

    renderSwiper(){
        return (
            <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[
                Autoplay
            ]}
            breakpoints={{
                320:{
                    slidesPerView:1,
                },
                689:{
                    slidesPerView:4
                }
            }}
            slidesPerView={4}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            speed={1000}
            style={{
                "--swiper-theme-color":'white'
            }}>
                {this.renderAllCards()}
            </Swiper>
        )
    }


    render(){
      
        return(
            <div className='categories-container' id='categories'>
                {this.renderTitle()}
                {this.renderSwiper()}
            </div>
        )
    }
};

export default Categories


// const ChefCard = () => 
// {
//     const [users, setUsers] = useState([]);
    
// getUsers().then((res) => {
//         setUsers(res)}
//         )


//         return(
//                         <SwiperSlide key={key}>
//                             <Card className="card-container" >
//                                 <CardActionArea className="card-actionarea">
//                                     <CardMedia
//                                         component="img"
//                                         image={card.image}
//                                         alt="Categories"
//                                         className='card-media'
//                                         />
//                                     <CardContent className="card-content">
//                                         <Typography gutterBottom variant="h5" component="div" className='card-content-title'>
//                                             {card.title}
//                                         </Typography>
//                                         <Typography variant="body2" className="card-content-text">
//                                         {card.chefs}
//                                             <i>
//                                                 <ArrowRightIcon style={{marginBottom: '0px'}}/>
//                                             </i>
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>
//                         </SwiperSlide>
//                     )
                
//     // return ( <div>Hello</div> );
// }
 
// export default ChefCard;
