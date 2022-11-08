import { useParams, Link } from 'react-router-dom'
import useMovies from '../../hooks/useMovies'

import styles from './MovieDetails.module.scss'

import Poster from '../../components/Poster/Poster'
import Rating from '../../components/Rating/Rating'
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'

const MovieDetails = () => {
  const { movieId } = useParams()

  const [movieData, loading] = useMovies({ type: 'id', id: movieId })

  const { title, poster_path, vote_average, overview } = movieData

  console.log(movieData)

  if (loading) return <LoadSpinner></LoadSpinner>

  if (!title)
    return (
      <>
        <p>No movies found</p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </>
    )

  return (
    <div className={styles['movie-details']}>
      <h2>{title}</h2>
      <div className={styles['card']}>
        <div className={styles['poster']}>
          <Poster size="overview" path={poster_path}></Poster>
        </div>
        <div className={styles['info']}>
          <Rating rating={vote_average}></Rating>
        </div>
      </div>
      <div className={styles['overview']}>
        <h3>Synapsis</h3>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default MovieDetails
