import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { gState } from '../../../context/Context'

export const Nav = () => {
    const navigate = useNavigate()
  const {data} = useContext(gState)
  const {isLoggedIn , userData} = data
  const {image} = userData
  console.log(data);
  return (
    <div className='w-full flex h-20 items-center text-white bg-[#2e2e2e] justify-around relative z-10 '>
        {
            isLoggedIn &&
            <>
            <h3 className='w-100 font-semibold italic text-[#fe9900]'>TechStore</h3>
            <ul className='flex center gap-8'>
                <li className='hover:scale-105 hover:transition-transform  hover:ease-in-out py-2 px-5 rounded-xl'>
                    <NavLink exact to={'/'} className='active:underline underline-offset-4'>
                        Products
                    </NavLink>
                </li>
                <li className='hover:scale-105 hover:transition-transform  hover:ease-in-out py-2 px-5 rounded-xl'>
                    <NavLink exact to={'/about'} className='active:underline underline-offset-4'>
                        About Us
                    </NavLink>
                </li>
                <li className='hover:scale-105 hover:transition-transform  hover:ease-in-out py-2 px-5 rounded-xl'>
                    <NavLink exact to={'/contact'} className='active:underline underline-offset-4'>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
                <figure onClick={()=>navigate('/account')} className='w-10 h-10 rounded-full overflow-hidden object-cover cursor-pointer shadow-lg bg-white'>
                    <img src={image} alt="" />
                </figure>
                </>
        }
        {
            !isLoggedIn &&
            <NavLink to={'/login'}>Login</NavLink>
        }
    </div>
  )
}