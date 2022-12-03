import * as React from 'react';
import Image from 'next/image';
import SearchBar from './search-container';


const Hero = () => {
    return (
                  <div className='hero-container'>
                    <div className='content-container'>
                      <div className='logo-container'>
                        <img src='./images/logoMychef.png' className='img-hero' alt=''/> 
                      </div>
                      <div className='hero-text'>
                          <p>Discover the best local chefs around you</p>
                      </div>
                      <div className='search-container'>
                        <SearchBar/>
                      </div>
                    </div>
                </div> 
    )
}

export default Hero;