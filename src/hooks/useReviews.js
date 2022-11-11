import { useState, useEffect } from 'react'

const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

const useReviews = (movieId) => {
  const [reviews, setReviews] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.results.slice(0, 10))
        setLoading(false)
      })
      .catch(() => {
        setReviews([])
        setLoading(false)
      })
  }, [])

  return [reviews, isLoading]
}

export default useReviews
