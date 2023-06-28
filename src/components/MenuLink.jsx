import Link from 'next/link'
import React from 'react'

const MenuLink = ({title, icon, link}) => {
  return (
    <>
        <Link href={link}>
            <div className='transition-all duration-75 flex text-base py-1'>
                <span className='font-bold mx-4 sm:hidden '>{icon}</span>
                <span className='uppercase font-bold mx-4 lg:mx-6 hidden sm:block '>{title}</span>
            </div>
        </Link>
    </>
  )
}

export default MenuLink