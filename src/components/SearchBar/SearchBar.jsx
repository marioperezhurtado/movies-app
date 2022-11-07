import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './SearchBar.module.scss'

import SearchIcon from '../../assets/Icons/SearchIcon'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const updateSearchHandler = (e) => setSearch(e.target.value)

  return (
    <div className={styles['search-bar']}>
      <label htmlFor="search">Search movie</label>
      <div>
        <input
          type="text"
          placeholder="Interstellar"
          id="search"
          name="search"
          value={search}
          onChange={updateSearchHandler}
        ></input>
        <Link to={`./search/${search}`}>
          <SearchIcon></SearchIcon>
        </Link>
      </div>
    </div>
  )
}

export default SearchBar
