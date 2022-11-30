import DirectoryItem from "../directory-item/directory-item.component.jsx";
import "./directory.styles.scss";
const Directory = (props) => {
  const { categories } = props;
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryItem title={title} key={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
