import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const useLocale = (url) => {
  const { userLocale } = useContext(UserContext)
  return `${url}&language=${userLocale}`
}

export default useLocale
