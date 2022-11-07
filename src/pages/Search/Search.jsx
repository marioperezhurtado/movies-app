import { useParams } from 'react-router-dom'
import useSearch from '../../hooks/useSearch'

import MovieList from '../../components/MovieList/MovieList'

const Search = () => {
  const { search } = useParams()

  const searchMoviesHandler = () => useSearch(search)

  return (
    <>
      <h2 className="title">Results for "{search}" :</h2>
      <MovieList onGetMovies={searchMoviesHandler}></MovieList>
    </>
  )
}

export default Search
