import styles from './PageNotFound.module.scss'

const PageNotFound = () => {
  return (
    <div className={styles['page-not-found']}>
      <h2>The page you're looking for </h2>
      <h2 className="text-highlighted">
        can't be found <span>😢</span>
      </h2>
      <button>Back to Home</button>
    </div>
  )
}

export default PageNotFound
