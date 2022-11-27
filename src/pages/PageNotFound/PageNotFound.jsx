import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <div className="big-title">
        <h2>{`The page you're looking for `}</h2>
        <h2 className="text-highlighted">
          {`
          can't be found `}
          <span>😢</span>
        </h2>
      </div>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </>
  )
}

export default PageNotFound
