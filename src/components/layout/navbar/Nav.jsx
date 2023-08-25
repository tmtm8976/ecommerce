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
    <div>
        {
            isLoggedIn &&
            <ul>
                <li>
                    <NavLink to={'/'}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>
                        Contact Us
                    </NavLink>
                </li>
                <figure onClick={()=>navigate('/account')}>
                    <img src={image} alt="" />
                </figure>
            </ul>
        }
        {
            !isLoggedIn &&
            <NavLink to={'/login'}>Login</NavLink>
        }
    </div>
  )
}
