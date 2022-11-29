import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useMoviesByCategory } from '../../hooks/useMovies'
import useCategories from '../../hooks/useCategories'

import MovieList from '../../components/MovieList/MovieList'
import Pagination from '../../components/Pagination/Pagination'

import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'

export default function Category() {
  const { categoryId } = useParams()

  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')

  const currentPage = +page || 1

  const { isLoading: isMoviesLoading, data: movies } = useQuery({
    queryKey: ['categoryMovies', categoryId, currentPage],
    queryFn: () => useMoviesByCategory(categoryId, currentPage)
  })

  const {
    isLoading: isCategoriesLoading,
    error: categoriesError,
    data: categories
  } = useQuery({
    queryKey: ['categories'],
    queryFn: useCategories
  })

  if (isMoviesLoading) return <LoadSpinner></LoadSpinner>

  if (isCategoriesLoading || categoriesError)
    return (
      <>
        <MovieList movies={movies.results}></MovieList>
        <Pagination totalPages={movies.total_pages} />
      </>
    )

  const categoryName = categories.find((c) => c.id === +categoryId)?.name

  return (
    <>
      <h2 className="title">
        Category: <span className="text-highlighted">{categoryName}</span>
      </h2>
      <MovieList movies={movies.results}></MovieList>
      <Pagination totalPages={movies.total_pages} />
    </>
  )
}
