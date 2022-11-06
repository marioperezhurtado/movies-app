import { Link } from 'react-router-dom'

import styles from './Navbar.module.scss'

import HomeIcon from '../../assets/Icons/HomeIcon'
import CategoriesIcon from '../../assets/Icons/CategoriesIcon'
import NewIcon from '../../assets/Icons/NewIcon'
import TrendingIcon from '../../assets/Icons/TrendingIcon'
import TopRatedIcon from '../../assets/Icons/TopRatedIcon'

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <Link to="./">
        <h1>Movies</h1>
      </Link>
      <ul>
        <li>
          <Link to="./">
            <HomeIcon></HomeIcon>Home
          </Link>
        </li>
        <li>
          <Link to="./categories">
            <CategoriesIcon></CategoriesIcon>Categories
          </Link>
        </li>

        <li>
          <Link to="./trending">
            <TrendingIcon></TrendingIcon>Trending
          </Link>
        </li>
        <li>
          <Link to="./top-rated">
            <TopRatedIcon></TopRatedIcon>Top Rated
          </Link>
        </li>
        <li>
          <Link to="./new">
            <NewIcon></NewIcon>New
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
