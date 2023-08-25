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

  return (
    <div>{JSON.stringify(product)}</div>
  )
}
