import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import { PiTelevisionFill } from 'react-icons/pi'

const Card = ({img,cardLink, date, cardPopular,cardVote, cardTitle, altTitle, detail, keyId}) => {
  return (
      <div className="relative my-4 max-w-2xl mx-auto group" key={keyId}>
            <Link href={cardLink}>
                <Image className='group-hover:brightness-50 drop-shadow-lg rounded-2xl hover:rounded-none transition-all duration-150 ease-in-out' src={`https://image.tmdb.org/t/p/original/${img}`} width={400} height={750} alt={altTitle} />
                <div className="absolute z-10 top-[1rem] w-full px-2 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out text-slate-50">
                    <h3 className='font-extrabold text-2xl'>{cardTitle}</h3>
                    <div className="flex items-center justify-between capitalize">
                        <span className='left-0 bg-slate-700 py-2 px-4 rounded-lg text-sm'>{date}</span>
                        <span className='right-0 flex flex-col items-end justify-center py-2 px-4 rounded-lg text-sm'>
                            <span className='flex flex-row-reverse'><PiTelevisionFill className='text-lg mx-4' /> {cardPopular}</span>
                            <span className='flex flex-row-reverse'><FiThumbsUp className='text-lg mx-4' /> {cardVote}</span>
                        </span>
                    </div>
                    <p className='bottom-0 mt-16 text-justify text-sm'>{detail}</p>
                </div>
            </Link>
        </div>
  )
}

export default Card