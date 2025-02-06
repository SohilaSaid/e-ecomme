import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'

export default function Productdetails() {
  let { id } = useParams()
  // let [product, setProduct] = useState(null)
  // let [loading, setLoading] = useState(true)

  // function detailsAPI(id) {
  //   setLoading(true)
  //   axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  //     .then((res) => {
  //       console.log(res)
  //       setProduct(res.data)
  //       setLoading(false)

  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setLoading(false)
  //     })

  // }

  // useEffect(() => {
  //   detailsAPI(id)
  // }, [id])
 function detailsAPI (){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

 }

  let{data,isLoading} = useQuery({
    queryKey:["productDetails",id],
    queryFn:detailsAPI,
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      {isLoading ? <div className='flex justify-center items-center h-screen'>
        <span className="loader"></span>
      </div> :
        <div className='w-10/12 mx-auto my-5'>
          <div className='flex justify-between items-center'>
            <div className='w-3/12'>  

              <Slider {...settings}>
                {data?.data?.data?.images.map((img,i)=>{
                  return(
                    <div key={i}>
                      <img src={img} className='w-full'></img>
                    </div>
                  )

                })}
              </Slider>
              
            </div>
            <div className='w-8/12'>
              <h2>{data?.data?.data?.title}</h2>
              <p className=' my-5'>{data?.data?.data?.description}</p>

              <div className='flex justify-between'>
                <span>{data?.data?.data?.price}EGP</span>
                <span>
                  <i className="fa-solid fa-star text-yellow-400 text-xs">{data?.data?.data?.ratingsAverage}3.4</i>
                </span>
              </div>
              <button className='bg-main text-white text-center  mt-3 p-1  w-full rounded hover:bg-green-600 '>Add to card</button>

            </div>

          </div>
        </div>}
    </>
  )
}
