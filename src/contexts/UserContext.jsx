import { useState, createContext } from 'react'

const UserContext = createContext()

const startingLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language

const UserContextProvider = ({ children }) => {
  const [userLocale, setUserLocale] = useState(startingLocale || 'en-US')

  const onChangeLocale = (newLocale) => setUserLocale(newLocale)

  return (
    <UserContext.Provider value={{ userLocale, onChangeLocale }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
export { UserContextProvider }
