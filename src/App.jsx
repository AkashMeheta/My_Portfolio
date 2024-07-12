import React from 'react'
import { Navbar, Project, Reviews, Tech_Stack, About_ME, Hero, Frontend_Parallax} from "./index"
import './App.css'
import Lenis from 'lenis';

import { useEffect } from 'react';



function App() {


  useEffect( () => {
    const lenis = new Lenis()
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  }, [])


  return (
    <>
      <div className='min-h-screen relative '>
      
      <Navbar></Navbar>
        <Hero></Hero>
        <Frontend_Parallax></Frontend_Parallax>
        <About_ME></About_ME>
      </div>
     
      {/*<Tech_Stack></Tech_Stack>
      <Project></Project>
      <About_ME></About_ME>
      <Reviews></Reviews> */}
    </>
  )
}

export default App
