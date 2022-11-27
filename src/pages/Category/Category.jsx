import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useMoviesByCategory } from '../../hooks/useMovies'
import useCategories from '../../hooks/useCategories'

import MovieList from '../../components/MovieList/MovieList'
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'

export default function Category() {
  const { categoryId } = useParams()

  const { isLoading: isMoviesLoading, data: movies } = useQuery({
    queryKey: ['categoryMovies', categoryId],
    queryFn: () => useMoviesByCategory(categoryId)
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
        <MovieList movies={movies}></MovieList>
      </>
    )

  const categoryName = categories.find((c) => c.id === +categoryId)?.name

  return (
    <>
      <h2 className="title">
        Category: <span className="text-highlighted">{categoryName}</span>
      </h2>
      <MovieList movies={movies}></MovieList>
    </>
  )
}
