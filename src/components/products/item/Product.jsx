import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product({product}) {
  const navigate = useNavigate()
  return (
   <>
   <div className='p-5 shadow-md rounded-2xl hover:cursor-pointer' onClick={()=>navigate(`details/${product.id}`)} >
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt="" />
        
   </div>
   </>
  )
}
