import { useState, useEffect } from 'react'

const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

const useCast = (movieId) => {
  const [cast, setCast] = useState([])
  const [isLoading, setLoading] = useState(true)

  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCast(data.cast.slice(0, 10))
        setLoading(false)
      })
      .catch(() => {
        setCast([])
        setLoading(false)
      })
  }, [])

  return [cast, isLoading]
}

export default useCast
