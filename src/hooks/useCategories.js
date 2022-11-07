import { useState, useEffect } from 'react'

const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

const CATEGORY_QUERY_TYPES = {
  categories: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
}

const useCategories = (type) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setLoading] = useState(true)

  const url = CATEGORY_QUERY_TYPES[type]

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.genres)
        setLoading(false)
      })
      .catch(() => {
        setMovies([])
        setLoading(false)
      })
  }, [])

  return [categories, isLoading]
}

export default useCategories
