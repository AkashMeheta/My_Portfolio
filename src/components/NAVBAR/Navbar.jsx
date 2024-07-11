import React from 'react'

const navItems = ['Home', 'Tech_Stack', 'Project', 'About_Me', 'Review']

navItems.map((item, index) => { console.log(item, index) })
const Navbar = () => {
  return (
    <>
      
      <div className=' fixed top-0 left-1/2 transform -translate-x-1/2 p-4 hidden md:block z-40'>
        <ul className='flex m-auto max-w-96 items-center justify-center font-inconsolata text-lg'>
          {navItems.map((item,index)=>(
            <li key={index} className='mx-2  px-10'>
              <a href="#" className='transition text-black ease-in-expo duration-500 hover:text-red-500 hover:text-xl hover:ease-out-expo hover:uppercase'>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar