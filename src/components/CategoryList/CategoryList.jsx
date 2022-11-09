import { Link } from 'react-router-dom'
import useCategories from '../../hooks/useCategories'

import styles from './CategoryList.module.scss'

import LoadSpinner from '../LoadSpinner/LoadSpinner'

const CategoryList = () => {
  const [categories, loading] = useCategories()

  if (loading) return <LoadSpinner></LoadSpinner>

  if (!categories || !categories.length) return <p>No categories found</p>

  const categoryItems = categories.map((c) => (
    <li key={c.id}>
      <Link to={`/categories/${c.id}`}>
        <div className={styles['category-item']}>
          <h3>{c.name}</h3>
        </div>
      </Link>
    </li>
  ))

  return <ul className={styles['category-list']}>{categoryItems}</ul>
}

export default CategoryList
