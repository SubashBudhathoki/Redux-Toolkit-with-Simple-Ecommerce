import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../slice/Cartslice";

const Cart = () => {
  const addProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col justify-center items-center p-5">
        {addProduct.map((product, id) => (
          <div
            key={id}
            className=" w-full max-w-sm rounded-lg  bg-green-300 p-5 mb-5"
          >
            <div className="object-fill">
              <img src={product.images[0]} alt="product" />
            </div>
            <div>
              <div>
                <span>
                  {product.title} {product.brand}
                </span>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </div>
              <div>
                <button
                  onClick={() => dispatch(deleteProduct({ id }))}
                  className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
