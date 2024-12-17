import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="logo">
        <BsCart4 />
        <Link to={"/home"}>
          {" "}
          <h4>ShopEase</h4>
        </Link>
      </div>
      <div className="navigation">
        <Link to={"/"}>
          <span>Home</span>
        </Link>
        <Link to={"/home"}>
          <span>products</span>
        </Link>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
