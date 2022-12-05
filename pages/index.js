import * as React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar';
import Hero from '../components/Hero/Hero';
import Explore from '../components/Explore/Explore';
import Categories from '../components/Categories/Categories';
import Popular from '../components/Popular/Popular';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';
import { getToken } from '../components/ResponsiveAppBar/registrationForm';


{/* <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript">  
</script> */}

export default function LandingPage() {
  return (
    <>
    <ResponsiveAppBar loggedIn={!getToken() == ''}/>
    <Hero/>
    <Explore/>
    <Categories/>
    <Popular/>
    <ContactUs/>
    <Footer/>
    </>
  )
}
