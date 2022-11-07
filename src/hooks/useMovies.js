import { useState, useEffect } from 'react'

const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

const MOVIE_QUERY_TYPES = {
  trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  latest: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
}

const useMovies = (type) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setLoading] = useState(true)

  const url = MOVIE_QUERY_TYPES[type]

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

export default useMovies
