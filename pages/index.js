import * as React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Hero from '../components/Hero';
import Explore from '../components/Explore';
import Categories from '../components/Categories';
import Popular from '../components/Popular';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <ResponsiveAppBar/>
    <Hero/>
    <Explore/>
    <Categories/>
    <Popular/>
    <ContactUs/>
    <Footer/>
    </>
  )
}
