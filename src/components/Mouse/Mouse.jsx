import React, { useEffect } from 'react'
import {motion, useMotionValue, useSpring } from 'framer-motion'

const Mouse = () => {

    const cursorSize = 20;
    const mouse = {
        x:useMotionValue(0),
        y:useMotionValue(0)
    }

    const manageMouseMove = (e) => {
        const { clientX , clientY} = e
        mouse.x.set(clientX - cursorSize/2)
        mouse.y.set(clientY - cursorSize/2)
    }
    const smoothMouse = {
        x: useSpring(mouse.x, {stiffness: 300, damping: 20, mass: 0.5}),
        y: useSpring(mouse.y, {stiffness: 300, damping: 20, mass: 0.5})
    }
    
    useEffect(()=>{
        window.addEventListener('mousemove', manageMouseMove);
        return () => {window.removeEventListener('mousemove', manageMouseMove)}
    })

  return (
    <motion.div
        className='w-5 h-5 fixed bg-[#ca3537] z-50 rounded-2xl'
        style={{left: smoothMouse.x, top: smoothMouse.y}}
    >
    </motion.div>
  )
}

export default Mouse