import CategoryItem from "../categories/category-component"
import './categories-container.styles.scss'
let CategoriesContainer = ({ categories }) => {
  return (
    <div className="categories-container container" >
      <CategoryItem categories={categories} />
    </div>
  )
}
export default CategoriesContainer