import React from 'react'
import MenuLink from './MenuLink'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import DarkMode from './DarkMode'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between pt-5'>
        <div className='flex items-center'>
            <MenuLink link='/' title={'home'} icon={<AiFillHome />} />
            <MenuLink link='/about' title={'about'} icon={<BsFillInfoCircleFill />} />
        </div>
        <div className='flex space-x-5'>
            <DarkMode />
            <Link href={'/'}>
                <span className='font-bold capitalize py-2 px-5 mx-4 bg-cyan-700 rounded-full transition-all ease-in-out hover:border-spacing-2 hover:border-cyan-950'>movie app</span>
            </Link>
        </div>
            
    </div>
  )
}

export default Navbar