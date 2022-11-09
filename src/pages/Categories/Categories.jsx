import styles from './Categories.module.scss'

import CategoryList from '../../components/CategoryList/CategoryList'

const Categories = () => {
  return (
    <div className={styles['categories']}>
      <h2 className="title">Categories</h2>
      <CategoryList></CategoryList>
    </div>
  )
}

export default Categories
