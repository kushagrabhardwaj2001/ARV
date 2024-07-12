import React from 'react';
import Hero from "../Components/Hero";
import Language from "../Components/Language";
import Banner from "../Components/Banner";
 import Cbanner from "../Components/Cbanner";

const Home = () => {
  return (
    <div>
  <Hero/>
  <Language/>
  { <Cbanner/> }
  
 
    </div>
  )
}

export default Home

