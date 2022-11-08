import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './SearchBar.module.scss'

import SearchIcon from '../../assets/Icons/SearchIcon'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')

  const navigate = useNavigate()

  const updateSearchHandler = (e) => {
    const input = e.target.value
    setSearchInput(input.charAt(0).toUpperCase() + input.slice(1))
  }

  const searchHandler = (e) => {
    e.preventDefault()
    if (!searchInput) return
    navigate(`/search/${searchInput}`)
    setSearchInput('')
  }

  return (
    <div className={styles['search-bar']}>
      <label htmlFor="search">Search movie</label>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="Interstellar"
          id="search"
          name="search"
          value={searchInput}
          onChange={updateSearchHandler}
        ></input>
        <button>
          <SearchIcon></SearchIcon>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
