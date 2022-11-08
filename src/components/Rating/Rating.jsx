import styles from './Rating.module.scss'

const Rating = ({ rating }) => {
  const formattedRating = rating.toFixed(1)

  const getRatingColor = (rating) => {
    if (rating === 0) return '#676767' // grey
    if (rating < 4) return '#bc3901' // red
    if (rating < 6) return '#b56e10' // orange
    if (rating < 7) return '#a49902' // yellow
    if (rating < 8) return '#0b941b' // greeh
    if (rating < 9) return '#0241a4' // blue
    return '#520b94' // purple
  }

  const ratingColor = getRatingColor(rating)

  return (
    <div className={styles['rating']} style={{ backgroundColor: ratingColor }}>
      {formattedRating}
    </div>
  )
}

export default Rating
