import useMovies from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'

const TopRated = () => {
  const getTopRatedMoviesHandler = () => useMovies('topRated')

  return (
    <>
      <h2 className="title">Top Rated Movies</h2>
      <MovieList onGetMovies={getTopRatedMoviesHandler}></MovieList>
    </>
  )
}

export default TopRated
