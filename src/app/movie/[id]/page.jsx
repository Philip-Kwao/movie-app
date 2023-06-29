import Image from 'next/image'
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import { FaFaceGrinStars } from 'react-icons/fa'
import { PiTelevisionFill } from "react-icons/pi";
import { BsFillCalendarDateFill } from 'react-icons/bs';


const apiKey = process.env.API_KEY
const getSingleMovie = async (movie_id) => {
    const singleMovieUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`
    const res = await fetch(singleMovieUrl)
    return await res.json()
}
const page = async ({params}) => {
    const movie_id = params.id
    const movie = await getSingleMovie(movie_id)
    return (
    <div className='flex mx-4 flex-row max-sm:flex-col'>
        <div className="flex basis-1/2">
            <Image className='shadow-2xl rounded dark:shadow-white dark:shadow-sm' width={900} height={1000} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
        </div>    
        <div className="flex basis-1/2 flex-col m-4">
            <h1 className='font-extrabold text-4xl mb-5'>{movie.title}</h1>
            <p>{movie.overview}</p>
            <div className="flex ">
                <span className='flex items-center justify-between w-[70px] font-extrabold '><FiThumbsUp className='text-lg' /> {movie.vote_count}</span>
                <span className='flex items-center justify-between w-[100px] font-extrabold ml-4'><PiTelevisionFill className='text-lg' /> {movie.popularity}</span>
                <span className="flex w-[125px] items-center justify-between font-bold mx-4"><BsFillCalendarDateFill className='text-sm' /> {movie.release_date}</span>
            </div>
        </div>    
    </div>
  )
}

export default page