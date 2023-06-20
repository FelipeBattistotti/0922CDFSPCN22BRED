import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import logo from './../../images/logo.svg'
import { getCookie } from "../../utils"
import api from "../../services/api"

const Header = () => {
  const navigate = useNavigate()

  const [keywords, setKeywords] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await api.get('product', { params: { keywords } })
      navigate('/search', { state: { productsSearch: response.data } })
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  const handleLogout = () => {
    document.cookie = `auth=; expires=${new Date(0)}`; // delete cookie

    alert('Logout realizado!')
    navigate('/')
  }

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
            <form className="search-form" onSubmit={handleSearch}>
              <input
                className="search-form_input"
                type="search"
                name="keywords"
                placeholder="Pesquise produtos, marcas e muito mais"
                value={keywords}
                onChange={e => setKeywords(e.target.value)}
              />
              <button
                className="search-form_button"
                type="submit"
              >
                <i className="fas fa-search"></i>
              </button>
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
            {getCookie('auth') !== '' ? (
              <li>
                <Link to="/product-create">
                  Incluir Produto
                </Link>
              </li>
            ) : null}
          </ul>
          <ul className="right-navbar">
            {getCookie('auth') === '' ? (
              <>
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
              </>
            ) :
              <li>
                <button
                  className="action-button delete"
                  onClick={handleLogout}
                >
                  Sair <i className="fas fa-sign-in-alt"></i>
                </button>
              </li>
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header