import styles from './MovieItem.module.scss'

const MovieItem = ({ movie }) => {
  return (
    <div className={styles['movie-item']}>
      <h3>{movie.title}</h3>
    </div>
  )
}

export default MovieItem
