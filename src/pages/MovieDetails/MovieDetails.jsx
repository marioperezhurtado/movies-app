import { useParams, Link } from 'react-router-dom'
import useMovies from '../../hooks/useMovies'
import usePoster from '../../hooks/usePoster'

import styles from './MovieDetails.module.scss'

import Poster from '../../components/Poster/Poster'
import Rating from '../../components/Rating/Rating'
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner'
import CastList from '../../components/CastList/CastList'

const MovieDetails = () => {
  const { movieId } = useParams()

  const [movieData, loading] = useMovies({ type: 'id', id: movieId })

  if (loading) return <LoadSpinner></LoadSpinner>

  const {
    title,
    poster_path,
    vote_average,
    overview,
    homepage,
    release_date,
    genres,
    vote_count,
    production_companies,
  } = movieData

  if (!title)
    return (
      <>
        <p>No movies found</p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </>
    )

  const posterUrl = usePoster(poster_path)
  const releaseYear = release_date.slice(0, 4)
  const producer = production_companies[0] ? production_companies[0].name : ''
  const categoryItems = genres.map((g) => (
    <li key={g.id}>
      <Link to={`/categories/${g.id}`}>{g.name}</Link>
    </li>
  ))

  return (
    <div className={styles['movie-details']}>
      <div className={styles['card']}>
        <div className={styles['poster']}>
          <a target="_blank" rel="noopener noreferrer" href={posterUrl}>
            <Poster size="poster" path={poster_path}></Poster>
          </a>
        </div>

        <div className={styles['info']}>
          <div className={styles['info-head']}>
            <h2 className="text-highlighted">{title}</h2>
            <Rating rating={vote_average}></Rating>
          </div>

          <div className={styles['info-details']}>
            <p className={styles['release-year']}>{releaseYear}</p>
            <ul>{categoryItems}</ul>
            <p>{producer}</p>
            <p>{vote_count} votes</p>
          </div>

          <div className={styles['info-website']}>
            {homepage && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={homepage}
                className="btn"
              >
                Official Site
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles['overview']}>
        <h3>Synopsis</h3>
        <p>{overview}</p>
      </div>
      <CastList movieId={movieId}></CastList>
    </div>
  )
}

export default MovieDetails
