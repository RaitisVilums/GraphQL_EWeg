import Button from "../button/button.components";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
