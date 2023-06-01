import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from "./pages/Home"

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
          path="/product-detail"
          element={null}
        />
        <Route
          path="/product-create"
          element={null}
        />
        <Route
          path="/product-update"
          element={null}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default Router