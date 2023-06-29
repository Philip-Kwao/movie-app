'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


const Searchbar = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!search){
      return
    }
    router.push(`/search/${search}`)
    // alert(search)
  }

  return (
    <form onSubmit={handleSubmit} className='m-4 flex items-center'>
      <input value={search} className='w-full h-[50px] px-5 dark:bg-slate-300 dark:text-slate-800' placeholder='Search Term' onChange={(e)=>setSearch(e.target.value)}  />
      <button disabled={!search} type="submit" className='text-white h-[50px] px-5 bg-cyan-500 outline-0 focus:outline-none cursor-pointer disabled:text-gray-500 disabled:cursor-not-allowed'>Search</button>
    </form>
  )
}

export default Searchbar