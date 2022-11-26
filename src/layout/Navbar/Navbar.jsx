import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.scss'

import LogoIcon from '../../assets/Icons/LogoIcon'
import HomeIcon from '../../assets/Icons/HomeIcon'
import CategoriesIcon from '../../assets/Icons/CategoriesIcon'
import NewIcon from '../../assets/Icons/NewIcon'
import TrendingIcon from '../../assets/Icons/TrendingIcon'
import TopRatedIcon from '../../assets/Icons/TopRatedIcon'

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <LogoIcon />

      <ul>
        <li>
          <NavLink to="./" aria-label="home">
            <HomeIcon></HomeIcon>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./categories" aria-label="categories">
            <CategoriesIcon></CategoriesIcon>
            <span>Categories</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="./trending" aria-label="trending">
            <TrendingIcon></TrendingIcon>
            <span>Trending</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./top-rated" aria-label="top rated">
            <TopRatedIcon></TopRatedIcon>
            <span>Top Rated</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="./new" aria-label="new">
            <NewIcon></NewIcon>
            <span>New</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
