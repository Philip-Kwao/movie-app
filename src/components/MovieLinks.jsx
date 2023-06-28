import React from 'react'
import MovieLink from './MovieLink'

const MovieLinks = () => {
  return (
    <div className='dark:bg-slate-500 bg-cyan-500 my-4 py-5 flex items-center justify-center'>
        <MovieLink title={'trending'} param={'fetchTrending'} />
        <MovieLink title={'top rated'} param={'fetchTopRated'} />
    </div>
  )
}

export default MovieLinks