
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider1 from '../Slider/Slider1'
import Slider2 from '../Slider/Slider2'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export default function Home() {

  // let [products, setProducts] = useState(null)
  // let [numsList, setNumsList] = useState()
  // let [loading, setLoading] = useState(true)
  // function productaAPI(page = 1) {
  //   setLoading(true)
  //   axios.get(`https://ecommerce.routemisr.com/api/v1/products?limit=20&page=${page}`)
  //     .then((res) => {
  //       console.log(res.data.data)
  //       setProducts(res.data.data)
  //       let nums = []
  //       for (let i = 1; i <= res.data.metadata.numberOfPages; i++) {
  //         nums.push(i)
  //       }
  //       setNumsList(nums)
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setLoading(false)
  //     })
  // }

  // useEffect(() => {
  //   productaAPI()
  // }, [])

  let [numsList, setNumsList] = useState("1")

  function productaAPI() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products?limit=20&page=${numsList}`)
  }

  let { data, error, isError, isLoading } = useQuery({
    queryKey: ["product", numsList],
    queryFn: productaAPI,
  })

  function pageNum(e) {
    let page = e.target.getAttribute('page')
    console.log(e.target)
    setNumsList(page)
  }

  if (isError) {
    return <h2 className='text-red-600'>{error.response.data.massage}</h2>
  }

  return (

    <>
      {isLoading ? <div className='flex justify-center items-center h-screen'>
        <span className="loader"></span>
      </div> : <div className='container w-11/12 mx-auto my-2'>
        <Slider1 />
        <Slider2 />
        <div className='flex flex-wrap mt-5'>
          {data?.data?.data?.map((product) => {
            let { id, title, price, imageCover, category, ratingsAverage } = product
            let { name } = category

            return (
              <div key={id}
                className='lg:w-2/12 md:w-3/12 sm:w-6/12 w-full p-2 ' >
                <Link to={"/Productdetails/" + id}>
                  <div className="item overflow-hidden group hover:border border-main p-2">
                    <img src={imageCover} className='w-full' alt={title}></img>
                    <h5 className='text-main'>{name}</h5>
                    <h2 className='text-2xl'> {title.split(" ").slice(0, 2).join(' ')} </h2>
                    <div className='flex justify-between'>
                      <span>{price}EGP</span>
                      <span>
                        <i className="fa-solid fa-star text-yellow-400 text-xs">{ratingsAverage}3.4</i>
                      </span>
                    </div>
                    <button className='bg-main text-white text-center  mt-3 p-1 translate-y-10 duration-500 w-full rounded hover:bg-green-600 group-hover:translate-y-0'>Add to card</button>

                  </div>
                </Link>
              </div>

            )
          })}

        </div>



        <nav aria-label="Page navigation example">
          <ul className="flex items-center justify-center -space-x-px h-8 text-sm">
            <li>
              <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
                <span className="sr-only">Previous</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                </svg>
              </a>
            </li>

            {/* {numsList?.map((el) => {
              return <li key={el} onClick={pageNum} >
                <a page={el} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">{el}</a>
              </li>
            })} */}

            {new Array(data?.data?.metadata?.numberOfPages).fill("").map((el, i) => {
              return <li key={el} onClick={pageNum} >
                <a page={i + 1} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">{i + 1}</a>
              </li>
            })}


            <li onClick={pageNum}>
              <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
                <span className="sr-only">Next</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>




      </div>}





    </>
  )
}



