import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useLatestMovies } from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'
import Pagination from '../../components/Pagination/Pagination'

import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'

const New = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')

  const currentPage = +page || 1

  const { isLoading, data: movies } = useQuery({
    queryKey: ['latestMovies', currentPage],
    queryFn: () => useLatestMovies(currentPage)
  })

  if (isLoading) return <LoadSpinner />

  return (
    <>
      <h2 className="title">Latest Movies</h2>
      <MovieList movies={movies.results}></MovieList>
      <Pagination totalPages={movies.total_pages} />
    </>
  )
}

export default New
