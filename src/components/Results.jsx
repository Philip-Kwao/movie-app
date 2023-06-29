import React from 'react'
import Card from './Card'

const Results = ({results}) => {
  return (
    <div className='grid 2xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {results.map((result)=>(
          <Card cardTitle={result.title} cardLink={`movie/${result.id}`} altTitle={result.original_title} img={result.poster_path} cardPopular={result.popularity} cardVote={result.vote_count} date={result.release_date} detail={result.overview} keyId={result.id} />
        ))}
    </div>
  )
}

export default Results