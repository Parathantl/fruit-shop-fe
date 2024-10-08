// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Layout from "./Layout";
import ProductList from "./ProdcutList";
import Home from "./Home";
import ProtectedRoute from "./ProectedRoute";
import SignIn from "./SignIn";
import AddFruit from "./Fruits/AddFruits";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import { FruitProvider } from "./context/FruitContext";
import FruitDetail from "./Fruits/FruitDetail";
import { CartProvider } from "./context/CartContext";
import CartDetails from "./Fruits/Cart";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51PrHd9Rxa5Loq6IR3SIztZIJZkB84kb9VqkvxMleq3b8CX2UovH3ZWVf5Gjp3RJ8vfE0zr76grZof1lJDiJdByZr008kQcQo5c');

const App: React.FC = () => {
  return (
    <>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      <Router>
        <AuthProvider>
          <FruitProvider>
            <CartProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/products" element={<ProtectedRoute element={<ProductList />} />} />
                  <Route path="/add-fruit" element={<ProtectedRoute element={<AddFruit />}  />} />
                  <Route path="/products/:id" element={<FruitDetail />} />
                  <Route path="/cart" element={<CartDetails />} />
                  <Route path="/checkout" element={    
                  <Elements stripe={stripePromise}>
                    <Checkout />
                  </Elements>} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/signin" element={<SignIn />} />
                </Route>
              </Routes>
          </CartProvider>
          </FruitProvider>
          </AuthProvider>
      </Router>
    </>
  );
};

export default App;
