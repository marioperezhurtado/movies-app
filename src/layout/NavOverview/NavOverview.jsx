import { Link } from 'react-router-dom'

import styles from './NavOverview.module.scss'

import CategoriesIcon from '../../assets/Icons/CategoriesIcon'
import TrendingIcon from '../../assets/Icons/TrendingIcon'
import TopRatedIcon from '../../assets/Icons/TopRatedIcon'
import NewIcon from '../../assets/Icons/NewIcon'

const NavOverview = () => {
  return (
    <div className={styles['nav-overview']}>
      <Link to="./categories">
        <div>
          <CategoriesIcon></CategoriesIcon>Categories
        </div>
      </Link>
      <Link to="./trending">
        <div>
          <TrendingIcon></TrendingIcon>Trending
        </div>
      </Link>
      <Link to="./top-rated">
        <div>
          <TopRatedIcon></TopRatedIcon>Top Rated
        </div>
      </Link>
      <Link to="./new">
        <div>
          <NewIcon></NewIcon>New
        </div>
      </Link>
    </div>
  )
}

export default NavOverview
