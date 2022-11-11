import styles from './ReviewItem.module.scss'

import Rating from '../Rating/Rating'

const ReviewItem = ({ review }) => {
  const { author_details, content } = review
  const { username, rating } = author_details
  const text = content.length < 400 ? content : content.slice(0, 400) + '...'

  if (!rating || !username || !text) return

  return (
    <div className={styles['review-item']}>
      <div className={styles['review-head']}>
        <strong>@{username}</strong>
        <Rating rating={rating}></Rating>
      </div>

      <p>{text}</p>
    </div>
  )
}

export default ReviewItem
