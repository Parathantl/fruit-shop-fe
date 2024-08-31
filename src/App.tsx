// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Layout from "./Layout";
import ProductList from "./ProdcutList";
import Home from "./Home";
import ProtectedRoute from "./ProectedRoute";
import SignIn from "./SignIn";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductList />   {/* Child Component of Protected Route */}
              </ProtectedRoute>
            }
          />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
