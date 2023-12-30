import { useSelector, useDispatch } from "react-redux";
import CartEmptyImg from "../../src/svg/cartEmpty.png";
import { addCartValue, removeCartValue } from "../RTK/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addCartValue(item));
  };

  const removeItemCart = (item) => {
    dispatch(removeCartValue(item));
  };

  return (
    <div className="fixed top-16 right-1 w-[250px] h-[300px] bg-white shadow-xl rounded-xl ">
      <div className="h-[200px] overflow-auto">
        {!cartItems.length ? (
          <img
            src={CartEmptyImg}
            className="size-40 w-full h-full rounded-xl"
          />
        ) : (
          cartItems.map((menu) => {
            return (
              <div className="p-5 flex justify-between border-b" key={menu.id}>
                <div>
                  <h3 className="font-bold text-black">{menu.itemName}</h3>
                  <h4 className="text-red-700 font-bold">₹{menu.rupees}</h4>
                </div>
                <div className="flex items-center">
                  <button
                    className="w-6 h-6 rounded-sm bg-black text-white"
                    onClick={() => removeItemCart(menu)}
                  >
                    -
                  </button>
                  <input
                    className=" w-6 text-center text-black"
                    value={menu.itemCount}
                    readOnly
                  />
                  <button
                    className="w-6 h-6 rounded-sm bg-black text-white"
                    onClick={() => addItemToCart(menu)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className=" absolute justify-between top-[70%] w-full flex p-5 pt-1 border-t-2">
        <h3 className="font-bold text-black">Total Amount</h3>
        <h4 className="text-red-700 font-bold">
          ₹
          {cartItems.length
            ? cartItems
                .reduce((acc, crr) => acc + crr.rupees * crr.itemCount, 0)
                .toFixed(2)
            : "0.00"}
        </h4>
      </div>

      <div className="absolute bottom-2 justify-center flex w-full">
        <button className="font-bold text-white  bg-green-600 w-28 h-8 rounded-lg">
          ORDER
        </button>
      </div>
    </div>
  );
};

export default Cart;
