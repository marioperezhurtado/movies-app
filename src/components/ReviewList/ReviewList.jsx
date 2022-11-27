import { useQuery } from '@tanstack/react-query'
import useReviews from '../../hooks/useReviews'

import styles from './ReviewList.module.scss'

import ReviewItem from '../ReviewItem/ReviewItem'
import LoadSpinner from '../LoadSpinner/LoadSpinner'

const ReviewList = ({ movieId }) => {
  const {
    isLoading,
    error,
    data: reviews
  } = useQuery({
    queryKey: ['reviews', movieId],
    queryFn: () => useReviews(movieId)
  })

  if (isLoading) return <LoadSpinner></LoadSpinner>

  if (error) return

  const reviewItems = reviews.map((r) => (
    <li key={r.id}>
      <ReviewItem review={r}></ReviewItem>
    </li>
  ))

  return (
    <div className={styles['review-list']}>
      <ul>{reviewItems}</ul>
    </div>
  )
}

export default ReviewList
