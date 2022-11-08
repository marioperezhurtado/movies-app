import { useParams } from 'react-router-dom'
import useMovies from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'

const Search = () => {
  const { search } = useParams()

  const searchMoviesHandler = () => useMovies('search', search)

  return (
    <>
      <h2 className="title">Results for "{search}" :</h2>
      <MovieList onGetMovies={searchMoviesHandler}></MovieList>
    </>
  )
}

export default Search
