import styles from './MovieItem.module.scss'

import Poster from '../Poster/Poster'
import Rating from '../Rating/Rating'

const MovieItem = ({ movie }) => {
  const { title, poster_path, vote_average } = movie

  return (
    <div className={styles['movie-item']}>
      <Poster size="overview" path={poster_path}></Poster>
      <div className={styles['movie-info']}>
        <h3>{title}</h3>
        <Rating rating={vote_average}></Rating>
      </div>
    </div>
  )
}

export default MovieItem
