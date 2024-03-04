import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navlinks } from '../Data/Navlinks'
import '../index.css'

const Navbar = () => {
    const[showDropdown,setShowDropdown] = useState(false)
    const handleMouseEnter=(index)=>
    {
        setShowDropdown({ ...showDropdown, [index]: true });
    }
    const handleMouseLeave=(index)=>
    {
        setShowDropdown({ ...showDropdown, [index]: false });

    }
  return (
   <>
   <nav className='navbar'>
    <div className='flex z-10 shadow-lg px-[140px]  justify-between'>
        <div className='flex items-center justify-between w-3/12 gap-[30px]'>
            <img className='h-full py-3' src='./images/logo.png'/>
            <button className='btn--linearbg'>BOOKINGS</button>
        </div>
        <div className='w-8/12 items-center flex  justify-end'>
           
            <ul className='flex relative justify-end gap-6 items-center navbar-wrapper'>
      {navlinks?.map((navlists, index) => (
        <li key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
          <NavLink to={navlists.slug} className={navlists?.caterory?.length>0?'dropdown ':''}>
            {navlists?.name}
            {navlists?.caterory?.length > 0 && showDropdown[index] && (
              <ul className='dropdown-menu'>
                {navlists?.caterory?.map((navCategory, categoryIndex) => (
                  <li key={categoryIndex}>
                    <NavLink to={navCategory.slug}>{navCategory?.name}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </NavLink>
        </li>
      ))}
    </ul>

        </div>

    </div>

   </nav>
   </>
  )
}

export default Navbar