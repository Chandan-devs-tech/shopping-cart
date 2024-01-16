import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  // const changeRoute = useNavigate();

  useEffect(() => {
    // const getToken = localStorage.getItem("authToken");
    // if (!getToken) {
    //   return changeRoute("/");
    // }
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <h3 className="text-3xl text-center text-black p-2 font-bold">OUR PRODUCTS</h3>
      <div className="flex justify-evenly flex-wrap gap-6">
        {products.map((product, index) => {
          return (
            <div
              className="flex items-center justify-center flex-wrap p-6"
              key={index}
            >
              <div className="w-80 h-96 cursor-pointer rounded-lg p-4 shadow duration-150 hover:scale-105 hover:shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 relative">
                <div className="w-full h-40 flex justify-center items-center bg-white">
                  <img
                    className="w-40 h-40 rounded-lg"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <p className="my-4 pl-4 font-bold text-black">
                  {product.title}
                </p>
                <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
                  ${product.price}
                </p>
                <div>
                  <button className="w-full md:w-3/5 border rounded-md border-gray-800 text-base font-medium leading-none uppercase py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 absolute bottom-0 mb-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;