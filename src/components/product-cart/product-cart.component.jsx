import Button from "../button/button.components";
import "./product-cart.styles.scss";

const ProductCart = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="iverted">ADD TO CART</Button>
    </div>
  );
};
export default ProductCart;
