import styles from './MovieItem.module.scss'

const MovieItem = ({ movie }) => {
  const { title, vote_average } = movie

  return (
    <div className={styles['movie-item']}>
      <h3>{title}</h3>
      <span>{vote_average}</span>
      <span></span>
    </div>
  )
}

export default MovieItem
