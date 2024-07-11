import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; 

// import Slider from "./Components/Slider";
// import Home from "./Home"; // Ensure you have a Home component
// import About from "./About"; // Ensure you have an About component
// import Contact from "./Contact"; // Ensure you have a Contact component

function App() {
  return (
   <React.Fragment>
  
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
         <Route path="/" element={<Home />} />
         {/* <Route path="/Slider" element={<Slider />} /> */}
      </Routes>
      </React.Fragment>
  );
}

export default App;
