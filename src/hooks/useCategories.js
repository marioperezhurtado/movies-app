const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

export default async function useCategories() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  )
  const data = await res.json()
  return data.genres
}
