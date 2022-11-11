import styles from './ReviewItem.module.scss'

import Poster from '../Poster/Poster'
import Rating from '../Rating/Rating'

const ReviewItem = ({ review }) => {
  const { author_details, content } = review
  const { username, rating, avatar_path } = author_details
  const text = content.length < 400 ? content : content.slice(0, 400) + '...'

  if (!rating || !username || !text) return

  console.log(avatar_path)

  return (
    <div className={styles['review-item']}>
      <div className={styles['review-head']}>
        <div className={styles['user-info']}>
          <Poster size={'avatar'} path={avatar_path}></Poster>
          <strong>@{username}</strong>
        </div>

        <Rating rating={rating}></Rating>
      </div>

      <p>{text}</p>
    </div>
  )
}

export default ReviewItem
