import styles from './CategoryList.module.scss'

import CategoryItem from '../CategoryItem/CategoryItem'
import LoadSpinner from '../LoadSpinner/LoadSpinner'

const CategoryList = ({ onGetCategories }) => {
  const [categories, loading] = onGetCategories()

  console.log(categories)

  if (loading) return <LoadSpinner></LoadSpinner>

  if (!categories || !categories.length) return <p>No categories found</p>

  const categoryItems = categories.map((c) => (
    <li key={c.id}>
      <CategoryItem category={c}></CategoryItem>
    </li>
  ))

  return <ul className={styles['category-list']}>{categoryItems}</ul>
}

export default CategoryList
