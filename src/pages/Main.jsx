import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import Footer from './Footer';


export default function Main() {

  const [isActive, toggler] = useState(true);

  

  const isToggle = () => {
    toggler(!isActive);
  };

 
  
    

  

  return (
    <div className={`select-none ${isActive ? 'bg-black' : 'bg-white'}`}>
      
       <Hero isActive={isActive} toggler={toggler} isToggle={isToggle} />

       <Footer></Footer>
    </div>
  )
}
