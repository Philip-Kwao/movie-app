'use client'
import React, { useEffect } from 'react'


const Error = ({error, reset}) => {
    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div className='text-center'>
        <h1 className='font-extrabold my-4'>Something went wrong somewhere</h1>
        <button className='hover:text-cyan-500 duration-100 transition-all' onClick={()=>reset()}>Retry</button>
    </div>
  )
}

export default Error