const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

export async function useTrendingMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  )
  const data = await res.json()
  return data.results
}

export async function useTopRatedMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
  )
  const data = await res.json()
  return data.results
}

export async function useLatestMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
  )
  const data = await res.json()
  return data.results
}

export async function useSearchMovies(search) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`
  )
  const data = await res.json()
  return data.results
}

export async function useMovieById(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  )
  const data = await res.json()
  return data
}

export async function useMoviesByCategory(categoryId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${categoryId}&sort_by=popularity.desc&api_key=${API_KEY}`
  )
  const data = await res.json()
  return data.results
}
