import React, { useEffect, useState } from 'react'
import Product from './Product'
import { getProducts } from '../../services/product.service'


export default function Products() {

  const [products, setProducts] = useState([]);

  // get data
  const getData = async ()=>{
    let data = await getProducts()
    const {products, total} = data
    setProducts(products)
  }


  useEffect(()=>{
    getData()
  },[])



  return (
    <div className='flex flex-wrap w-full items-center justify-center'>
        {products.map(p=><Product product={p}/>)}
    </div>
  )
}
