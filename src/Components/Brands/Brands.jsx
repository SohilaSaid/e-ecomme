import React from 'react'
import useAPI from '../Hooks/useAPI'

export default function Brands() {

    let{ data , isLoading} = useAPI("brands")

    if (isLoading){
        return (
            <div className='flex justify-center items-center h-screen'>
        <span className="loader"></span>
      </div>
        )
    }
  return (
    <>
    <div className='flex flex-wrap'>
    {data?.data?.data?.map((brand) => {
                    return (
                        <div key={brand._id} className='w-3/12'>
                            <img src={brand.image} className="w-full h-48 object-cover" alt=""></img>
                            <h4 className="text-center">{brand.name}</h4>
                        </div>
                    )

                })}
    </div>
    </>
  )
}
