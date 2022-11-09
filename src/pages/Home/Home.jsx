import SearchBar from '../../components/SearchBar/SearchBar'
import NavOverview from '../../layout/NavOverview/NavOverview'

const Home = () => {
  return (
    <>
      <div className="big-title">
        <h2>Find the best movies,</h2>
        <h2 className="text-highlighted">fast and easy</h2>
      </div>
      <SearchBar></SearchBar>
      <NavOverview></NavOverview>
    </>
  )
}

export default Home
