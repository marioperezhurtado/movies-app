const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

export async function useTrendingMovies(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?page=${page}&api_key=${API_KEY}`
  )
  const data = await res.json()
  return data
}

export async function useTopRatedMovies(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?page=${page}&api_key=${API_KEY}`
  )
  const data = await res.json()
  return data
}

export async function useLatestMovies(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?page=${page}&api_key=${API_KEY}`
  )
  const data = await res.json()
  return data
}

export async function useSearchMovies(search, page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=${API_KEY}`
  )
  const data = await res.json()
  return data
}

export async function useMovieById(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  )
  const data = await res.json()
  return data
}

export async function useMoviesByCategory(categoryId, page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${categoryId}&page=${page}&sort_by=popularity.desc&api_key=${API_KEY}`
  )
  const data = await res.json()
  return data
}
