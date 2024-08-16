import React from 'react'
import { NavLink } from 'react-router-dom'

const MainHeader = () => {
  return (
    <header className=' bg-blend-darken  ' >
      <div className=" container flex justify-between bg-black py-2 ">
        <div className="logo">logo</div>
        <nav>
          <ul className='flex items-center gap-2'>
            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? "text-red-300" : ""} >Home</NavLink>

            </li>
            <li>
              <NavLink to='/blog' className={({ isActive }) => isActive ? "text-red-300" : ""} >Blog</NavLink>

            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default MainHeader
