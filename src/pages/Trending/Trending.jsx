import { useQuery } from '@tanstack/react-query'
import { useTrendingMovies } from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'

import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'

const Trending = () => {
  const { isLoading, data: movies } = useQuery({
    queryKey: ['trendingMovies'],
    queryFn: useTrendingMovies
  })

  if (isLoading) return <LoadSpinner></LoadSpinner>

  return (
    <>
      <h2 className="title">Trending Movies</h2>
      <MovieList movies={movies}></MovieList>
    </>
  )
}

export default Trending
