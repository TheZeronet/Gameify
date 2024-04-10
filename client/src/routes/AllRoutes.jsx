import { Route, Routes } from "react-router-dom";
import Cart from "../Cart";
import LandingPage from "../pages/LandingPage";
import OrderSuccessfull from "../pages/OrderSuccessfull";
import PaymentForm from "../pages/PaymentForm";
import AccessoryPage from "../pages/AccessoryPage";
import SingleAccessoryPage from "../pages/SingleAccessoryPage";
import ProductPage from "../pages/ProductPage";
import Wishlist from "../pages/Wishlist";
import SingleWishlist from "../pages/SingleWishlistPage";
import SingleProductPage from "../pages/SingleProductPage";
import UserDashboard from "../pages/UserDashboard";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/SignUp";
import AdminDashbord from "../pages/AdminDashbord";
import AddProduct from "../components/AddProduct";
import AllUsers from "../pages/AllUsers";
import Dashborad from "../pages/Dashborad";
import AdminPrivateAuth from "./AdminPrivateRoute";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";
import PaymentPage from "../pages/PaymentPage";
import Details from "../pages/Details";
import Checkout from "../pages/Checkout";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="/accessory" element={<AccessoryPage />} />
        <Route
          path="/accessory/:producerID"
          element={<SingleAccessoryPage />}
        />

        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:producerID" element={<SingleProductPage />} />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route
          path="/details"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        <Route
          path="/checkout/payment"
          element={
            <PrivateRoute>
              <PaymentForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/OrderSuccessfull"
          element={
            <PrivateRoute>
              <OrderSuccessfull />
            </PrivateRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />

        <Route
          path="/wishlist/:producerID"
          element={
            <PrivateRoute>
              <SingleWishlist />
            </PrivateRoute>
          }
        />

        <Route path="/user-profile" element={<UserDashboard />} />

        <Route path="/about" element={<About />} />

        {/*////////////////////////////////////////////////////*/}

        <Route path="/admin" element={<AdminDashbord />}>
          <Route
            index
            element={
              <AdminPrivateAuth>
                <Dashborad />{" "}
              </AdminPrivateAuth>
            }
          />
          <Route
            exact
            path="dashboard"
            element={
              <AdminPrivateAuth>
                <Dashborad />{" "}
              </AdminPrivateAuth>
            }
          />

          <Route
            exact
            path="add-product"
            element={
              <AdminPrivateAuth>
                <AddProduct />{" "}
              </AdminPrivateAuth>
            }
          />
          <Route
            exact
            path="all-users"
            element={
              <AdminPrivateAuth>
                <AllUsers />{" "}
              </AdminPrivateAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
