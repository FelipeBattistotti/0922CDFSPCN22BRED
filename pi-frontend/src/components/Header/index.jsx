import React, { useState } from "react"
import { Link } from "react-router-dom"

import logo from './../../images/logo.svg'

const Header = () => {
  const [keywords, setKeywords] = useState('')

  return (
    <header className="main-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5 col-md-2">
            <Link
              className="main-header_home-link"
              to="/"
            >
              <img src={logo} />
            </Link>
          </div>

          <div className="col-7 col-md-6">
            <form action="/search" method="GET" className="search-form">
              <input
                className="search-form_input"
                type="text"
                name="keywords"
                placeholder="Pesquise produtos, marcas e muito mais"
                value={keywords}
                onChange={e => setKeywords(e.target.value)}
              />
              <button type="submit" className="search-form_button"><i className="fas fa-search"></i></button>
            </form>
          </div>

          <div className="col-12 col-md-4">
          </div>
        </div>

        <button className="btn-toggle-navbar">
          <i className="fas fa-bars"></i>
        </button>

        <nav className="main-navbar">
          <ul className="left-navbar">
            <li>
              <Link to="/product-create">
                Incluir Produto
              </Link>
            </li>
          </ul>
          <ul className="right-navbar">
            <li>
              <Link to="/user-create">
                Crie sua conta <i className="far fa-address-card"></i>
              </Link>
            </li>
            <li>
              <Link to="/user-login">
                Entrar <i className="fas fa-sign-in-alt"></i>
              </Link>
            </li>
            {/* <li><a href="#">Carrinho<i className="fas fa-shopping-basket"></i></a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header