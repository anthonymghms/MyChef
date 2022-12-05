'use client';
import * as React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar';
import Hero from '../components/Hero/Hero';
import Explore from '../components/Explore/Explore';
import Categories from '../components/Categories/Categories';
import Popular from '../components/Popular/Popular';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';
import { GetTokenParams } from 'next-auth/jwt';
import { getToken } from '../components/ResponsiveAppBar/registrationForm';
import Router, { useRouter } from 'next/router';


export default function LandingPage() {
  const router = useRouter();
  React.useEffect(() => {
    if (getToken() == ''){
      router?.push('/')
    }
  })
    return (
      <>
      <ResponsiveAppBar loggedIn={true}/>
      <Hero/>
      <Explore/>
      <Categories/>
      <Popular/>
      <ContactUs/>
      <Footer/>
      </>
    )
  
}
