import Results from "@/components/Results"

const apiKey = process.env.API_KEY

export default async function Home({searchParams}) {
  const genre = searchParams.genre||"fetchTrending"
  // const upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming'
  // const popularTvUrl = 'https://api.themoviedb.org/3/tv/popular'
  // const popularUrl = 'https://api.themoviedb.org/3/movie/popular'
  // const ratedUrl = 'https://api.themoviedb.org/3/movie/top_rated'
  const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/week'

   // Main API Endpoint
   const fullApi = `https://api.themoviedb.org/3/${genre==="fetchTopRated"?"movie/top_rated":"trending/movie/week"}`

   const movieLinkUrl = `${fullApi}?api_key=${apiKey}&language=en-US&page=1`
  //  const trendingMovies = `${trendingUrl}?api_key=${apiKey}`

  const res = await fetch(movieLinkUrl,{next:{revalidate:1000}})
   const data = await res.json()
   const result = data.results
   console.log(result)
   if(!res.ok){
    throw new Error("Something went wrong whiles fetching data.")
   }
  return (
    <div className="">
      <Results results={result} />
    </div>
  )
}
