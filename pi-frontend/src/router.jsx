import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from "./pages/Home"
import Login from "./pages/Login"
import UserCreate from "./pages/UserCreate"
import ProductDetail from "./pages/ProductDetail"
import ProductCreate from "./pages/ProductCreate"
import ProductUpdate from "./pages/ProductUpdate"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/user-create"
          element={<UserCreate />}
        />
        <Route
          path="/product-detail"
          element={<ProductDetail />}
        />
        <Route
          path="/product-create"
          element={<ProductCreate />}
        />
        <Route
          path="/product-update"
          element={<ProductUpdate />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default Router