import React from "react";
import { useGetAllProductQuery } from "../slice/Apislice";
import { useDispatch } from "react-redux";
import { addProducts } from "../slice/Cartslice";

const Cards = () => {
  const { data } = useGetAllProductQuery();
  const dispatch = useDispatch();
  if (!data) {
    return <div>Loading...</div>;
  }
  const addItems = (product) => {
    // dispatch the add
    dispatch(addProducts(product));
  };
  return (
    <>
      {data.products.map((product, id) => (
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
                onClick={() => addItems(product)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to carts
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
