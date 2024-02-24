import React from 'react'
import GenresList from "../Services/GenresList"
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map((x, index) => (<div className='p-8 px-8 md:px-16'>
        <h2 className='text-[20px] font-bold  text-white'>{x.name} </h2>
        <MovieList genreId={x.id}/>
      </div>))}
    </div>
  )
}

export default GenreMovieList