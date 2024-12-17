import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products") // Make sure this is the correct endpoint
      .then((response) => {
        console.log("API Response Data:", response.data);
        if (Array.isArray(response.data)) {
          setProducts(response.data); // Set products only if the response is an array
        } else {
          console.error("Expected an array but got:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <div className="App">
        <div className="products-grid">
          {products?.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;