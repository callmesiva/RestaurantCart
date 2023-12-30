import ResBack from "../../src/svg/resback.jpg";
import { addItem, removeItem, addItemToCart } from "../RTK/cartSlice";
import { menuList } from "../constants";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const removeItems = (item) => {
    dispatch(removeItem(item));
  };
  const addItems = (item) => {
    dispatch(addItem(item));
  };
  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="relative">
      <div className="top-0 left-0 w-full h-full">
        <img
          src={ResBack}
          alt="Restaurant Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="top-24 left-[315px] absolute text-white shadow-sm shadow-white bg-gray-800 p-5 rounded-md text-center w-1/2 ">
        <h1 className="font-bold">Delicious Food, Delivered To You</h1>
        <h3 className="pb-3">
          Choose your favorite meals from our broad selection of available meals
          and enjoy a delicious lunch and dinner at home.
        </h3>
        <h3>
          All our meals are cooked with high-quality ingredients, just in time,
          and of course, by experienced chefs.
        </h3>
      </div>

      <div className="top-[330px] left-[282px] absolute w-[700px] rounded-md bg-white grid grid-cols-1 divide-y">
        {menuList.map((menu) => {
          const cart = cartItems.find((item) => item.id === menu.id);
          const itemCount = cart ? cart.itemCount : 0;

          return (
            <div className="p-5 flex justify-between" key={menu.id}>
              <div>
                <h3 className="font-bold">{menu.itemName}</h3>
                <h6 className="italic text-sm">{menu.cusines}</h6>
                <h4 className="text-red-700 font-bold">₹{menu.rupees}</h4>
              </div>

              <div className="absolute right-0 pr-5">
                <div className="flex items-center">
                  <button
                    className="w-6 h-6 rounded-sm bg-black text-white"
                    onClick={() => removeItems(menu)}
                  >
                    -
                  </button>
                  <input
                    className=" w-6 text-center text-black"
                    value={itemCount}
                    readOnly
                  />
                  <button
                    className="w-6 h-6 rounded-sm bg-black text-white"
                    onClick={() => addItems(menu)}
                  >
                    +
                  </button>
                </div>

                <div className="absolute pt-5 right-0 pr-7">
                  <button
                    className="font-bold text-white  bg-red-700 w-14 h-6 rounded-lg"
                    onClick={() => addToCart(menu)}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
