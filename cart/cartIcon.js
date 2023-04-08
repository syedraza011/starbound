import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
const CartIcon = () => {
  const [numItemsInCart, setNumItemsInCart] = useState(0);

  // Function to add item to cart and update numItemsInCart
  function addItemToCart() {
    setNumItemsInCart(numItemsInCart + 1);
  }

  // Function to remove item from cart and update numItemsInCart
  function removeItemFromCart() {
    if (numItemsInCart > 0) {
      setNumItemsInCart(numItemsInCart - 1);
    }
  }

  return (
    <nav>
      <ul>
        <li>
          <a href="/cart">
            <BsCart4 />
            <span className="cart-badge">{numItemsInCart}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default CartIcon;
