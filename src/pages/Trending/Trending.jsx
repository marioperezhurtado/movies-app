import useMovies from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'

const Trending = () => {
  const useMoviesHandler = () => useMovies('trending')

  return (
    <>
      <h2 className="title">Trending Movies</h2>
      <MovieList onGetMovies={useMoviesHandler}></MovieList>
    </>
  )
}

export default Trending
