import React from 'react'
import { Nav } from './navbar/Nav'
import { Footer } from './footer/Footer'

export const Layout = (props) => {
    const {children} = props
  return (
    <>
        <Nav/>
            {children}
        <Footer/>
    </>
  )
}
