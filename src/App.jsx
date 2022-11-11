import { Routes, Route } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext'

import './App.css'

import Navbar from './layout/Navbar/Navbar'

import Home from './pages/Home/Home'
import Categories from './pages/Categories/Categories'
import Trending from './pages/Trending/Trending'
import TopRated from './pages/TopRated/TopRated'
import New from './pages/New/New'
import Search from './pages/Search/Search'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import Category from './pages/Category/Category'
import PageNotFound from './pages/PageNotFound/PageNotFound'

function App() {
  return (
    <UserContextProvider>
      <div className="app">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/categories" element={<Categories></Categories>} />
            <Route path="/trending" element={<Trending></Trending>} />
            <Route path="/top-rated" element={<TopRated></TopRated>} />
            <Route path="/new" element={<New></New>} />
            <Route path="/search/:search" element={<Search></Search>} />
            <Route
              path="/movie/:movieId"
              element={<MovieDetails></MovieDetails>}
            />
            <Route
              path="/categories/:categoryId"
              element={<Category></Category>}
            />
            <Route path="/*" element={<PageNotFound></PageNotFound>} />
          </Routes>
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
