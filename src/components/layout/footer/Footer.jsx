import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='p-10 bg-[#2e2e2e] flex justify-around text-white items-center flex-col'>
        <div className='flex flex-col md:flex-row w-full justify-around'>
             <h3 className='w-100 font-semibold italic text-[#fe9900]'>TechStore</h3>

            <ul className='flex flex-col center gap-2 '>
              <li className='text-xs hover:text-[#fe9900]'>
                  <NavLink exact to={'/'} className='active:underline underline-offset-4'>
                      Products
                  </NavLink>
              </li>
              <li className='text-xs hover:text-[#fe9900]'>
                  <NavLink exact to={'/about'} className='active:underline underline-offset-4'>
                      About Us
                  </NavLink>
              </li>
              <li className='text-xs hover:text-[#fe9900]'>
                  <NavLink exact to={'/contact'} className='active:underline underline-offset-4'>
                      Contact Us
                  </NavLink>
              </li>
            </ul>


            <ul className='flex center '>
                <li className=''>
                    <NavLink exact to={'/'} className='active:underline underline-offset-4'>
                        I
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink exact to={'/about'} className='active:underline underline-offset-4'>
                      F
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink exact to={'/contact'} className='active:underline underline-offset-4'>
                        L
                    </NavLink>
                </li>
            </ul>
        </div>
      
    </footer>
  )
}
