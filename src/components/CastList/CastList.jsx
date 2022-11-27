import { useQuery } from '@tanstack/react-query'
import useCast from '../../hooks/useCast'

import styles from './CastList.module.scss'

import CastItem from '../CastItem/CastItem'
import LoadSpinner from '../LoadSpinner/LoadSpinner'

export default function CastList({ movieId }) {
  const {
    isLoading,
    error,
    data: cast
  } = useQuery({
    queryKey: ['cast', movieId],
    queryFn: () => useCast(movieId)
  })

  if (isLoading)
    return (
      <div className={styles['cast-list']}>
        <LoadSpinner></LoadSpinner>
      </div>
    )

  if (error) return

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
