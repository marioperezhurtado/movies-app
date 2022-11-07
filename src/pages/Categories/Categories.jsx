import useCategories from '../../hooks/useCategories'

import CategoryList from '../../components/CategoryList/CategoryList'

const Categories = () => {
  const getCategoriesHandler = () => useCategories('categories')

  return (
    <>
      <h2 className="title">Categories</h2>
      <CategoryList onGetCategories={getCategoriesHandler}></CategoryList>
    </>
  )
}

export default Categories
