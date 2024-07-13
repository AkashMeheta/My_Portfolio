import React from 'react'
import "./navbar.css"
const navItems = ['Home', 'About_Me', 'Tech_Stack', 'Project', 'Review']

navItems.map((item, index) => { console.log(item, index) })
const Navbar = () => {
  return (
    <>
      
      <div className=' fixed top-0 left-1/2 transform -translate-x-1/2 p-4 hidden md:block z-[51] w-auto shadow-inner'>
        <ul className='flex m-auto w-full items-center justify-center font-inconsolata text-lg tab '>
          {navItems.map((item,index)=>(
            <li key={index} className='mx-2  px-10'>
              <a href={`#${item}`} className='transition text-black ease-in-expo duration-500 hover:text-red-500 hover:text-xl hover:ease-out-expo hover:uppercase'>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar