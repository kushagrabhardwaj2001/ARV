import React from 'react';
import Hero from "../Components/Hero";
import Language from "../Components/Language";
 import Cbanner from "../Components/Cbanner";
 import Established from "../Components/Established";

const Home = () => {
  return (
    <div>
     
  <Hero/>
  <Established/>
  <Language/>
  { <Cbanner/> }
  
    </div>
  )
}

export default Home

