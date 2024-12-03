import "./App.css";
import { BsCart4 } from "react-icons/bs";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://product-server-zeta.vercel.app/?vercelToolbarCode=2Shp7H2qGfDxWJW")
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <>
      <body>
        <header>
          <div className="logo">
            <BsCart4 />
            <h4>ShopEase</h4>
          </div>
          <div className="navigation">
            <span>Home</span>
            <span>products</span>
            <button>Login</button>
          </div>
        </header>
        <div className="App">
          <div className="products-grid">
            {products.map((product) => (
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
      </body>
    </>
  );
};

export default App;
