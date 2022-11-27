import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useSearchMovies } from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'

const Search = () => {
  const { search } = useParams()

  const { isLoading, data: movies } = useQuery({
    queryKey: ['searchMovies', search],
    queryFn: () => useSearchMovies(search)
  })

  if (isLoading) return <LoadSpinner></LoadSpinner>

  return (
    <>
      <h2 className="title">
        Results for <span className="text-highlighted">{`"${search}"`}</span>:
      </h2>
      <MovieList movies={movies}></MovieList>
    </>
  )
}

export default Search
