import React from 'react';
import Hero from "../Components/Hero";
import Language from "../Components/Language";
 import Cbanner from "../Components/Cbanner";
 import Established from "../Components/Established";
 import Section from "../Components/Section";
 import Contactus from '../Components/Contactus';
 import Review from "../Components/Review";
 import Uibanner from "../Components/Uibanner";
 import Empowering from '../Components/Empowering';

const Home = () => {
  return (
    <div>
     
  <Hero/>
 
  <Established/>
  <Section/>
  <Language/>

   <Cbanner/> 
<Review/>
<Uibanner/>
<Empowering/>
<Contactus/>
    </div>
  )
}

export default Home