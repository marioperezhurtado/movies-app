import styles from './Home.module.scss'

import SearchBar from '../../components/SearchBar/SearchBar'
import NavOverview from '../../layout/NavOverview/NavOverview'

const Home = () => {
  return (
    <div className={styles['home']}>
      <div className={styles['title']}>
        <h2>Find the best movies,</h2>
        <h2 className="text-highlighted">fast and easy</h2>
      </div>
      <SearchBar></SearchBar>
      <NavOverview></NavOverview>
    </div>
  )
}

export default Home
