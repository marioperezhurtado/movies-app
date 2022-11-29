import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useTrendingMovies } from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'
import Pagination from '../../components/Pagination/Pagination'

import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'

const Trending = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')

  const currentPage = +page || 1

  const { isLoading, data: movies } = useQuery({
    queryKey: ['trendingMovies', currentPage],
    queryFn: () => useTrendingMovies(currentPage),
    keepPreviousData: true
  })

  if (isLoading) return <LoadSpinner></LoadSpinner>

  return (
    <>
      <h2 className="title">Trending Movies</h2>
      <MovieList movies={movies.results} />
      <Pagination totalPages={movies.total_pages} />
    </>
  )
}

export default Trending
