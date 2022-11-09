import { useState, useEffect } from 'react'

const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.genres)
        setLoading(false)
      })
      .catch(() => {
        setCategories([])
        setLoading(false)
      })
  }, [])

  return [categories, isLoading]
}

export default useCategories
