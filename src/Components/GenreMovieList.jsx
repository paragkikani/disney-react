import React from 'react'
import GenresList from "../Services/GenresList"

function GenreMovieList() {
  return (
    <div>
        {GenresList.genere.map(x => <h2>{x.name} </h2>)}
    </div>
  )
}

export default GenreMovieList