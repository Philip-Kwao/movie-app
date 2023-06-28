'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const MovieLink = ({title, param}) => {
    const searchParams = useSearchParams()
    const genre = searchParams.get("genre")
  return (
    <div className='mx-3'>
        <Link className={`
        ${
            genre && genre===param && "underline decoration-4 underline-offset-[10px] dark:decoration-cyan-500 "
        }
        `} href={`/?genre=${param}`}>
            <h3 className='capitalize hover:text-white dark:hover:text-cyan-500 transition-all duration-75'>{title}</h3>
        </Link>
    </div>
  )
}

export default MovieLink