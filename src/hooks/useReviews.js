const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

export default async function useReviews(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  )
  const data = await res.json()
  return data.results.slice(0, 10)
}
