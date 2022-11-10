import { useParams } from 'react-router-dom'
import useMovies from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'

const Search = () => {
  const { search } = useParams()

  const searchMoviesHandler = () =>
    useMovies({ type: 'search', search: search })

  return (
    <>
      <h2 className="title">
        Results for <span className="text-highlighted">{`"${search}"`}</span>:
      </h2>
      <MovieList onGetMovies={searchMoviesHandler}></MovieList>
    </>
  )
}

export default Search
