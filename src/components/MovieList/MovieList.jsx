import { Link } from 'react-router-dom'

import styles from './MovieList.module.scss'

import MovieItem from '../MovieItem/MovieItem'

const MovieList = ({ movies }) => {
  if (!movies || !movies.length) {
    return (
      <>
        <p>No movies found</p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </>
    )
  }

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
