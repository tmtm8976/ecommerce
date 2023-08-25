import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/product.service'

export const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const getProduct = async (id) => {
        const product = await getProductById(id)
        setProduct(product)
    }

    useEffect(()=>{
        getProduct(id)
    }, [])

  return (<>
      <div>{JSON.stringify(product)}</div>
      {product  && <div className='flex justify-center'>
        <div className='relative w-1/3 h-[min(50vh,400px)] overflow-hidden rounded-md'>
          {product.images.map(img=><img src={img} className='absolute top-0 left-0 h-full object-cover'/>)}
        </div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </div>}
    </>
  )
}
