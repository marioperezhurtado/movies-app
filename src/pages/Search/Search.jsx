import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useSearchMovies } from '../../hooks/useMovies'

import MovieList from '../../components/MovieList/MovieList'
import Pagination from '../../components/Pagination/Pagination'

import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'

const Search = () => {
  const { search } = useParams()

  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')

  const currentPage = +page || 1

  const { isLoading, data: movies } = useQuery({
    queryKey: ['searchMovies', search, currentPage],
    queryFn: () => useSearchMovies(search, currentPage)
  })

  if (isLoading) return <LoadSpinner></LoadSpinner>

  return (
    <>
      <h2 className="title">
        Results for <span className="text-highlighted">{`"${search}"`}</span>:
      </h2>
      <MovieList movies={movies.results}></MovieList>
      <Pagination totalPages={movies.total_pages} />
    </>
  )
}

export default Search
