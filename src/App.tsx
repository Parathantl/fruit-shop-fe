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
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/products" element={<ProtectedRoute element={<ProductList />} />} />
              <Route path="/add-fruit" element={<ProtectedRoute element={<AddFruit />}  />} />
              <Route path="/products/:id" element={<FruitDetail />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </Route>
          </Routes>
          </FruitProvider>
          </AuthProvider>
      </Router>
    </>
  );
};

export default App;
