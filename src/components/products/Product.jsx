import React from 'react'

export default function Product({product}) {
  return (
   <>
   <div className='p-5 shadow-md rounded-2xl'>
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt="" />
        
   </div>
   </>
  )
}
