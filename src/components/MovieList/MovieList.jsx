import { Link } from 'react-router-dom'

import styles from './MovieList.module.scss'

import MovieItem from '../MovieItem/MovieItem'
import LoadSpinner from '../LoadSpinner/LoadSpinner'

const MovieList = ({ onGetMovies }) => {
  const [moviesData, loading] = onGetMovies()

  const movies = moviesData.results

  if (loading) return <LoadSpinner></LoadSpinner>

  if (!movies || !movies.length)
    return (
      <>
        <p>No movies found</p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </>
    )

  const movieItems = movies.map((m) => {
    if (m.vote_average == 0) return
    return (
      <li key={m.id}>
        <MovieItem movie={m}></MovieItem>
      </li>
    )
  })

  return <ul className={styles['movie-list']}>{movieItems}</ul>
}

export default MovieList
