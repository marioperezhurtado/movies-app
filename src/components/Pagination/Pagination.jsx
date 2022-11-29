import { useSearchParams } from 'react-router-dom'

import styles from './Pagination.module.scss'

export default function Pagination({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page')

  const lastPage = totalPages < 500 ? totalPages : 500

  const currentPage = +page || 1

  const changePageHandler = (page) => {
    setSearchParams({ page: page })
  }

  const prevPageHandler = () => {
    if (currentPage - 1 < 1) return
    changePageHandler(currentPage - 1)
  }
  const nextPageHandler = () => {
    if (currentPage + 1 > lastPage) return
    changePageHandler(currentPage + 1)
  }
  const firstPageHandler = () => changePageHandler(1)
  const lastPageHandler = () => changePageHandler(lastPage)

  return (
    <div className={styles.pagination}>
      <a onClick={prevPageHandler}>{'\u276E'}</a>
      <a onClick={firstPageHandler}>...</a>
      <a className={styles['page-selected']}>{currentPage}</a>
      <a onClick={lastPageHandler}>...</a>
      <a onClick={nextPageHandler}>{'\u276F'}</a>
    </div>
  )
}
