import React, { useEffect, useState } from 'react'
import Product from '../item/Product'
import { getProducts } from '../../../services/product.service'


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
    <div className='flex flex-col items-center w-full justify-center'>
        <div className='w-full h-[60vh] relative flex items-center justify-center flex-col md:flex-row'>
          <h1 className='text-[4vw] w-[30vw] p-5'>
            Get Your Orders Now!
          </h1>
          <img src='van.jpg' className='w-1/2'></img>
        </div>
      <h1 className='m-10'>P R O D U C T S</h1>
    <div className='flex flex-wrap items-center justify-center w-[75%]'>
        <hr className='w-full pt-1 mb-5 border-0 bg-[#fe9900]' />
        {products.map(p=><Product product={p}/>)}
    </div>
    </div>
  )
}
