import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product({product}) {
  const navigate = useNavigate()
  return (
   <>
    <div className='pb-5 shadow-md rounded-2xl hover:cursor-pointer bg-white m-5 overflow-hidden' onClick={()=>navigate(`details/${product.id}`)} >
          <img src={product.thumbnail} alt="" className='overflow-hidden object-cover w-60 h-60 relative top-0'/>
          <div className=' w-60 p-3'>
            <h1 className='h-10 font-semibold w-full flex justify-between items-start'>{product.title}<span className='text-xs'>{product.price+'$'}</span></h1>
            <p className='pt-5 text-xs h-20'>{product.description}</p>
          </div>
          
    </div>
   </>
  )
}
