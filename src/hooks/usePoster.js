const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

const usePoster = (path) => {
  if (!path) return

  return `https://image.tmdb.org/t/p/w500${path}?api_key=${API_KEY}`
}

export default usePoster
