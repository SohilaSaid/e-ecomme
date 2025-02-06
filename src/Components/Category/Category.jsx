import React from 'react'
import useAPI from '../Hooks/useAPI'

export default function Category() {

    let{ data , isLoading} = useAPI("categories")

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
    {data?.data?.data?.map((cayegory) => {
                    return (
                        <div key={cayegory._id} className='w-3/12'>
                            <img src={cayegory.image} className="w-full h-48 object-cover" alt=""></img>
                            <h4 className="text-center">{cayegory.name}</h4>
                        </div>
                    )

                })}
    </div>
    </>
  )
}
