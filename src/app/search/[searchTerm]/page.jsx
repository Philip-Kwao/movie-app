import Results from '@/components/Results'
import React from 'react'

const SearchPage = async ({params}) => {
    const baseUrl = 'https://api.themoviedb.org/3/search/movie'
    const apiKey = process.env.API_KEY
    const res = await fetch(`${baseUrl}?api_key=${apiKey}&query=${params.searchTerm}&language=en-US&include_adult=false`)

    if(!res.ok){
      throw new Error('Failed to load search data')
    }
    // console.log(params.searchTerm)
    const data = await res.json()
    const results = data.results

  return (
    <div>
        {results && results.length===0 && (
            <h1 className="text-center font-bold m-5">No results found</h1>
        )}

        {results && <Results results={results} />}
    </div>
  )
}

export default SearchPage