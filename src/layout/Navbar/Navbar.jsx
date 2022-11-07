import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.scss'

import HomeIcon from '../../assets/Icons/HomeIcon'
import CategoriesIcon from '../../assets/Icons/CategoriesIcon'
import NewIcon from '../../assets/Icons/NewIcon'
import TrendingIcon from '../../assets/Icons/TrendingIcon'
import TopRatedIcon from '../../assets/Icons/TopRatedIcon'

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <h1>Movies</h1>
      <ul>
        <li>
          <NavLink to="./">
            <HomeIcon></HomeIcon>Home
          </NavLink>
        </li>
        <li>
          <NavLink to="./categories">
            <CategoriesIcon></CategoriesIcon>Categories
          </NavLink>
        </li>

        <li>
          <NavLink to="./trending">
            <TrendingIcon></TrendingIcon>Trending
          </NavLink>
        </li>
        <li>
          <NavLink to="./top-rated">
            <TopRatedIcon></TopRatedIcon>Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink to="./new">
            <NewIcon></NewIcon>New
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
