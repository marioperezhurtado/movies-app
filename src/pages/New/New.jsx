import { useQuery } from '@tanstack/react-query'
import { useLatestMovies } from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'

const New = () => {
  const { isLoading, data: movies } = useQuery({
    queryKey: ['latestMovies'],
    queryFn: () => useLatestMovies()
  })

  if (isLoading) return <LoadSpinner />

  return (
    <>
      <h2 className="title">Latest Movies</h2>
      <MovieList movies={movies}></MovieList>
    </>
  )
}

export default New
