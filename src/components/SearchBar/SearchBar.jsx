import styles from './SearchBar.module.scss'

import SearchIcon from '../../assets/Icons/SearchIcon'

const SearchBar = () => {
  return (
    <div className={styles['search-bar']}>
      <label htmlFor="search">Search movie</label>
      <div>
        <input
          type="text"
          placeholder="Interstellar"
          id="search"
          name="search"
        ></input>
        <SearchIcon></SearchIcon>
      </div>
    </div>
  )
}

export default SearchBar
