import React, { useState, useEffect } from "react";
import Product from "./all_products.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import all_accessories from "./all_accessories.jsx";

function ProductsB() {
  return (
    <>
      <div className="col">
        {Product.slice(0, 4).map((product) => (
          <div key={product._id} style={{ marginBottom: "30px" }}>
            <div>
              <img
                src={product.imgURL}
                alt={product.name}
                style={{ width: "250px", height: "325px" }}
              />
            </div>
            <div>
              <div>{product.name}</div>
              <div>${product.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <h2
          style={{
            color: "#E9EFE7",
            fontSize: "40px",
            textAlign: "left",
            paddingLeft: "50px",
          }}
        >
          Accessories
        </h2>
        <hr style={{ borderBottom: "4px solid white", marginBottom: "50px" }} />
      </div>

      <div className="col">
        {all_accessories.slice(0, 4).map((product) => (
          <div key={product._id} style={{ marginBottom: "30px" }}>
            <div>
              <img
                src={product.imgURL}
                alt={product.name}
                style={{ width: "250px", height: "325px" }}
              />
            </div>
            <div>
              <div>{product.name}</div>
              <div>${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductsB;
