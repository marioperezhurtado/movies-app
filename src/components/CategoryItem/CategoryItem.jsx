import styles from './CategoryItem.module.scss'

const CategoryItem = ({ category }) => {
  return (
    <div className={styles['category-item']}>
      <h3>{category.name}</h3>
    </div>
  )
}

export default CategoryItem
