import { useState, useEffect } from 'react'

const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

const useSearch = (search) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setLoading] = useState(true)

  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
        setLoading(false)
      })
      .catch(() => {
        setMovies([])
        setLoading(false)
      })
  }, [])

  return [movies, isLoading]
}

export default useSearch
