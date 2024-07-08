import React from 'react'

const navItems = ['Home', 'Tech_Stack', 'Project', 'About_Me', 'Review']

navItems.map((item, index) => { console.log(item, index) })
const Navbar = () => {
  return (
    <>
      <div className='mb-9 '>
        <ul className='flex m-auto max-w-96 items-center justify-center font-inconsolata text-lg'>
          {navItems.map((item,index)=>(
            <li key={index} className='mx-2  px-10'>
              <a href="#" className='transition white ease-in-expo duration-500 hover:text-red-500 hover:text-xl hover:ease-out-expo hover:uppercase'>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar