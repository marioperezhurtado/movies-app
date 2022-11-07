import useMovies from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'

const New = () => {
  const useMoviesHandler = () => useMovies('latest')

  return (
    <>
      <h2 className="title">Latest Movies</h2>
      <MovieList onGetMovies={useMoviesHandler}></MovieList>
    </>
  )
}

export default New
