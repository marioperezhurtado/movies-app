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
            <HomeIcon></HomeIcon>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./categories">
            <CategoriesIcon></CategoriesIcon>
            <span>Categories</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="./trending">
            <TrendingIcon></TrendingIcon>
            <span>Trending</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./top-rated">
            <TopRatedIcon></TopRatedIcon>
            <span>Top Rated</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./new">
            <NewIcon></NewIcon>
            <span>New</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
