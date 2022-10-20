import CategoryItem from "../category-item/category-item.component.jsx";
import "./directory.styles.scss";
const Directory = (props) => {
  const { categories } = props;
  return (
    <div className="categories-container">
      {categories.map((el) => {
        const { title, id, imageUrl } = el;
        return <CategoryItem title={title} key={id} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

export default Directory;
