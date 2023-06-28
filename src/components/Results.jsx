import React from 'react'

const Results = ({results}) => {
  return (
    <div>
        {results.map((result)=>(
           <h3>{result.title}</h3>
        ))}
    </div>
  )
}

export default Results