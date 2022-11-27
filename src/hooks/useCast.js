const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

export default async function useCast(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  )
  const data = await res.json()
  return data.cast.slice(0, 10)
}
