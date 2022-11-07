import useTrendingMovies from '../../hooks/useTrendingMovies'

import MovieList from '../MovieList/MovieList'

const TrendingList = () => {
  const [movies, loading] = useTrendingMovies()

  console.log(movies)

  if (loading) return <p>Loading</p>

  if (!movies.length) return <p>No movies found</p>

  return <MovieList movies={movies}></MovieList>
}

export default TrendingList
