import { useState, useEffect } from 'react'

const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

const useTrendingMovies = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
        setLoading(false)
      })
  }, [])

  return [movies, isLoading]
}

export default useTrendingMovies
