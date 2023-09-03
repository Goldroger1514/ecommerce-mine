import './category.styles.scss'
let CategoryItem = ({ categories }) => {
  return (
    categories.map(category => {
      return (
        <div key={category.id}
          className={`category-container ${category.title == 'mens' ? 'mens' : category.title == 'womens' ? 'womens' : ''}`} >
          <div className='background-image' style={{ backgroundImage: `url(${category.imageUrl})` }} ></div>
          <div className={`info`}>
            <h3>{category.title.toUpperCase()}</h3>
            <p>SHOP NOW</p>
          </div>
        </div>
      )
    })
  )
}
export default CategoryItem