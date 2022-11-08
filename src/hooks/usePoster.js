const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

const usePoster = ({ size, path }) => {
  return `https://image.tmdb.org/t/p/${size}${path}?api_key=${API_KEY}`
}

export default usePoster
