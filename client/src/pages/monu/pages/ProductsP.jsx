import React, { useState, useEffect } from "react";
// import all_products from '../../../../all_products.js'; // Import your data from all_products.js
import axios from "axios";
import { useParams } from "react-router-dom";
import { useUser } from "../../../user/UserContext.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductsP() {
  const { user } = useUser();
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:9002/api/v2/ecommerce/fetchProducts`
      );

      const data = await response.json();
      if (data.success === true) {
        setProducts(data.allpro);
      } else {
        console.error("Error fetching product data");
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const res = await axios.post(
        "http://localhost:9002/api/v3/admin/deleteProduct",
        { productId: productId }
      );
      console.log(res);
      if (res.data.success === true) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        fetchData();
      } else {
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="bootstrap-tabs product-tabs">
              <div className="col">
                {products.map((product) => (
                  <div className="product-card product-item" key={product._id}>
                    <div className="main-images">
                      <img
                        src={product.imgUrl}
                        className="tab-image"
                        alt={product.name}
                      />
                    </div>
                    <div className="shoe-details">
                      <div className="shoe_name">
                        {product.name
                          .toLowerCase()
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </div>
                    </div>
                    <button
                      type="submit"
                      onClick={() => deleteProduct(product._id)}
                      style={{
                        color: "white",
                        fontSize: "22px",
                        marginTop: "14px",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsP;
