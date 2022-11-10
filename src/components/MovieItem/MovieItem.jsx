import { useNavigate } from 'react-router-dom'

import styles from './MovieItem.module.scss'

import Poster from '../Poster/Poster'
import Rating from '../Rating/Rating'

const MovieItem = ({ movie }) => {
  const { id, title, poster_path, vote_average } = movie

  const navigate = useNavigate()

  const showDetailsHandler = () => navigate(`/movie/${id}`)

  return (
    <div className={styles['movie-item']} onClick={showDetailsHandler}>
      <Poster size="poster" path={poster_path}></Poster>
      <div className={styles['movie-info']}>
        <h3>{title}</h3>
        <Rating rating={vote_average}></Rating>
      </div>
    </div>
  )
}

export default MovieItem
