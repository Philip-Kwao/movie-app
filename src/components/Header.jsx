import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import MovieLinks from './MovieLinks'

const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <MovieLinks />
      {/* SearchBar */}
      <Searchbar />
    </div>
  )
}

export default Header