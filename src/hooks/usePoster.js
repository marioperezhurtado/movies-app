const API_KEY = '8243a850b508a5696318cfcbb7ff2e8b'

const POSTER_SIZE_TYPES = {
  original: 'original',
  poster: 'w500',
  profile: 'w185',
  avatar: 'w45'
}

const usePoster = ({ size, path }) => {
  if (!path || !size) return

  const imgSize = POSTER_SIZE_TYPES[size]

  return `https://image.tmdb.org/t/p/${imgSize}${path}?api_key=${API_KEY}`
}

export default usePoster
