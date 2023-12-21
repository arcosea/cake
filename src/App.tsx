import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes, NavLink} from "react-router-dom";
import Navbar from './NavBar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Sprints } from './pages/Sprints';
import { Desktop } from './ui/device/Desktop';
import { Mobile } from './ui/device/Mobile';

const WindowBreakpoint: number = 960;

function App() {
  const [onMobile, setOnMobile] = useState<boolean>(false);
  const [width, setWidth] = useState(
    window.innerWidth
  );

   /**
   * Listen to the window width as it resizes
   */
   useEffect(() => {
    const handleWindowResize = () => {
      const newWidth = window.innerWidth;
      
  
      if (newWidth < WindowBreakpoint && !onMobile) {
        setOnMobile(true);
      } else if (newWidth >= WindowBreakpoint) {
        setOnMobile(false);
      }
      setWidth(newWidth);
    };

    // Call the handleWindowResize function initially to set the initial state
    handleWindowResize();
  
    // Attach the event listener to the window resize event
    window.addEventListener("resize", handleWindowResize);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  function renderContent(){
    // if (onMobile && width < WindowBreakpoint) {
    //   return Mobile();
    // } else{
    //   return Desktop();
    // }
    return Mobile()
  }

  return (  
  <>
    {renderContent()}
  </>
  );

}

export default App;
