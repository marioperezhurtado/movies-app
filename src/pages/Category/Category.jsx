import { useParams } from 'react-router-dom'
import useMovies from '../../hooks/useMovies'
import useCategories from '../../hooks/useCategories'

import MovieList from '../../components/MovieList/MovieList'
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'

const Category = () => {
  const { categoryId } = useParams()

  const getMoviesByCategoryHandler = () =>
    useMovies({ type: 'category', categoryId: categoryId })

  const [categories, loading] = useCategories()

  if (loading) return <LoadSpinner></LoadSpinner>

  if (!categories || !categories.length)
    return <MovieList onGetMovies={getMoviesByCategoryHandler}></MovieList>

  const category = categories.find((c) => c.id === +categoryId)

  if (!category || !category.name)
    return <MovieList onGetMovies={getMoviesByCategoryHandler}></MovieList>

  return (
    <>
      <h2 className="title">
        Category: <span className="text-highlighted">{category.name}</span>
      </h2>
      <MovieList onGetMovies={getMoviesByCategoryHandler}></MovieList>
    </>
  )
}

export default Category
