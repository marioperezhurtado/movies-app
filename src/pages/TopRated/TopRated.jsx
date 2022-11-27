import { useQuery } from '@tanstack/react-query'
import { useTopRatedMovies } from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'

import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'

const TopRated = () => {
  const { isLoading, data: movies } = useQuery({
    queryKey: ['topRatedMovies'],
    queryFn: useTopRatedMovies
  })

  if (isLoading) return <LoadSpinner></LoadSpinner>

  return (
    <>
      <h2 className="title">Top Rated Movies</h2>
      <MovieList movies={movies}></MovieList>
    </>
  )
}

export default TopRated
