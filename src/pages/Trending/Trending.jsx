import useMovies from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'

const Trending = () => {
  const getTrendingMoviesHandler = () => useMovies({ type: 'trending' })

  return (
    <>
      <h2 className="title">Trending Movies</h2>
      <MovieList onGetMovies={getTrendingMoviesHandler}></MovieList>
    </>
  )
}

export default Trending
