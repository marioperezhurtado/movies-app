import useCast from '../../hooks/useCast'

import styles from './CastList.module.scss'

import CastItem from '../CastItem/CastItem'
import LoadSpinner from '../LoadSpinner/LoadSpinner'

const CastList = ({ movieId }) => {
  const [cast, loading] = useCast(movieId)

  if (loading)
    return (
      <div className={styles['cast-list']}>
        <LoadSpinner></LoadSpinner>
      </div>
    )

  if (!cast || !cast.length) return

  const castItems = cast.map((a) => (
    <li key={a.id}>
      <CastItem actor={a}></CastItem>
    </li>
  ))

  return (
    <div className={styles['cast-list']}>
      <ul>{castItems}</ul>
    </div>
  )
}

export default CastList
