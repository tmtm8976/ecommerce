import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/product.service'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (<>
      {/* <div>{JSON.stringify(product)}</div> */}
      {product  && <div className='flex justify-center p-32 gap-16 relative '>
        {/* <div className='h-[300px] w-full absolute p-5 bg-[#2e2e2e] top-48 -z-10'></div> */}
      <div className='relative w-1/3 h-[min(50vh,400px)] rounded-md '>
      <Slider {...settings} >
    {product.images.map((img, index) => (
      <div className='h-[300px] w-[300px] flex items-center justify-center overflow-hidden'><img key={index} src={img} className='h-full object-cover' /></div>
    ))}
  </Slider>
</div>
        <div>
         <div className=''><p>Rating: <span className='text-yellow-700'>{product.rating}</span></p><h1 className='m-0 font-bold text-3xl'>{product.title}</h1></div> 
        <hr className='w-full pt-[0.5px] my-5 border-0 bg-[#fe9900]' />
          <p>{product.description}</p>
          <span className='font-bold'>{product.price+" $"}</span>
          <p className='text-red-600'>{"BUY NOW TO GET "+product.discountPercentage+"% OFF"}</p>
          
          <p>Stock: <span className='text-green-500'>{product.stock}</span></p>
          <p>Brand: <span>{product.brand}</span></p>
          <p>{"Category: "+product.category}</p>
          <button className='px-5 py-3 bg-[#fe9900] rounded-sm mt-8 shadow-md font-bold text-white hover:scale-105 hover:ease-in-out hover:transition-transform'>Buy now</button>
        </div>
      </div>}
    </>
  )
}
