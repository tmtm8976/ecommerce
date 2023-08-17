import React from 'react'
import {products} from '../data'
import Product from './Product'

export default function Products() {
  return (
    <div className='flex flex-wrap w-full items-center justify-center'>
        {products.map(p=><Product product={p}/>)}
    </div>
  )
}
