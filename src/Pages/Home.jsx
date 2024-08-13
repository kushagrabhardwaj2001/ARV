import React from 'react';
import Hero from "../Components/Hero";
import Language from "../Components/Language";
 import Cbanner from "../Components/Cbanner";
 import Established from "../Components/Established";
 import Section from "../Components/Section";
 import Contactus from '../Components/Contactus';

const Home = () => {
  return (
    <div>
     
  <Hero/>
 
  <Established/>
  <Section/>
  <Language/>

  { <Cbanner/> }
  
    </div>
  )
}

export default Home

