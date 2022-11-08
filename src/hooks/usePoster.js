const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

const POSTER_SIZES = {
  overview: 'w500',
}

const usePoster = (size, path) => {
  const posterSize = POSTER_SIZES[size]

  if (!posterSize || !path) return

  return `https://image.tmdb.org/t/p/${posterSize}${path}?api_key=${API_KEY}`
}

export default usePoster
