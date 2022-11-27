import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import useCategories from '../../hooks/useCategories'

import styles from './CategoryList.module.scss'

import LoadSpinner from '../LoadSpinner/LoadSpinner'

export default function CategoryList() {
  const {
    isLoading,
    error,
    data: categories
  } = useQuery({
    queryKey: ['categories'],
    queryFn: useCategories
  })

  if (isLoading) return <LoadSpinner></LoadSpinner>

  if (error) return <p>No categories found</p>

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
