import styles from './MovieList.module.scss'

import MovieItem from '../MovieItem/MovieItem'

const MovieList = ({ movies }) => {
  const movieItems = movies.map((m) => (
    <li key={m.id}>
      <MovieItem movie={m}></MovieItem>
    </li>
  ))

  return <ul className={styles['movie-list']}>{movieItems}</ul>
}

export default MovieList
