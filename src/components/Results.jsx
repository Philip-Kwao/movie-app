import React from 'react'
import Card from './Card'

const Results = ({results}) => {
  return (
    <div className='grid grid-cols-4'>
        {results.map((result)=>(
          <Card cardTitle={result.title} cardLink={`movie/${result.id}`} altTitle={result.original_title} img={result.poster_path} cardPopular={result.popularity} cardVote={result.vote_count} date={result.release_date} />
        ))}
    </div>
  )
}

export default Results