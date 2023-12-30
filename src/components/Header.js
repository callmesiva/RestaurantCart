import { useSelector } from "react-redux";
import CartLogo from "../../src/svg/cart.png";
import Cart from "../components/Cart";
import React, { useState } from "react";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <div>
      <div className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold">ReactMeal</h2>

          <button
            className="flex items-center rounded-md bg-white p-2"
            onClick={() => setShowCart((initialValue) => !initialValue)}
          >
            <img src={CartLogo} alt="Cart Icon" className="w-6 h-6 pr-1" />
            <h4 className="font-bold text-black flex items-center space-x-1">
              {cartItems.reduce((acc, crr) => acc + crr.itemCount, 0)}
              <span className="ml-1">Cart</span>
            </h4>
          </button>
        </div>
        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Header;
