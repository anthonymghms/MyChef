import * as React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Hero from './components/Hero';
import Explore from './components/Explore';
import Categories from './components/Categories';

function App() {
  return (
    <>
    <ResponsiveAppBar/>
    <Hero/>
    <Explore/>
    <Categories/>
    </>
  )
}

export default App;
