import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useAPI(endPoint) {
    
    let res = useQuery ({
        queryKey : [endPoint] ,
        queryFn : function (){
            return axios.get(`https://ecommerce.routemisr.com/api/v1/${endPoint}`)
        }

    })


  return res
}
