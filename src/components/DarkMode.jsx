"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BsMoonFill } from 'react-icons/bs'
import { MdLightMode } from 'react-icons/md'

const DarkMode = () => {
    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])
    const {systemTheme, theme, setTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    return (
        <>
        {mounted && currentTheme === "dark" ? (
            <MdLightMode className='text-xl cursor-pointer hover:text-cyan-700 transition-all' onClick={()=> setTheme("light")} />
            ):(
            <BsMoonFill className='text-xl cursor-pointer hover:text-cyan-700 transition-all' onClick={()=>setTheme("dark")} />
        )}
    </>
  )
}

export default DarkMode