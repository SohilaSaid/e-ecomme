import React from 'react'
import error from '../../assets/images/error.svg'

export default function Notfound() {
  return (
    <div className='flex justify-center items-center'>
      <img src={error}></img>
    </div>
  )
}
