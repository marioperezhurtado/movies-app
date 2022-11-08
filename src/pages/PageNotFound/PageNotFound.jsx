import { Link } from 'react-router-dom'

import styles from './PageNotFound.module.scss'

const PageNotFound = () => {
  return (
    <div className={styles['page-not-found']}>
      <div className={styles['title']}>
        <h2>The page you're looking for </h2>
        <h2 className="text-highlighted">
          can't be found <span>😢</span>
        </h2>
      </div>
      <Link to="./" className="btn">
        Back to Home
      </Link>
    </div>
  )
}

export default PageNotFound
