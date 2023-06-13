import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import api from "../../services/api"
import Input from "../../components/Input"

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const handleLogin = async () => {
    const auth = {
      email: email,
      pwd: pwd
    }

    try {
      const response = await api.post('/login', auth)

      document.cookie = `auth=${response.data.token}; expires=${new Date(2100, 0, 1)}`

      alert('Login realizado!')
      navigate('/')

    } catch (error) {
      alert(error.response.data)
    }
  }

  return (
    <>
      <Header />

      <div className="container products-wrapper">
        <div className="row">
          <div className="col-12">
            <h2 className="products-title">Login</h2>
          </div>
        </div>
        <div className="col-12">
          <div className="row product-detail">
            <div className="col-7">
              <Input
                id="email"
                label="E-mail:"
                type="email"
                placeholder="Informe o seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="col-7">
              <label htmlFor="pwd" className="form-label">Senha:</label>
              <input
                id="pwd"
                className="form-input"
                type="password"
                name="pwd"
                placeholder="Informe a senha"
                value={pwd}
                onChange={e => setPwd(e.target.value)}
              />
            </div>
            <div className="col-12">
              <button
                className="buy-now-button"
                onClick={handleLogin}
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Login