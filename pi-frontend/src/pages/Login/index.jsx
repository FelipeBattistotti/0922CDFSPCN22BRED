import React, { useState } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Login = () => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

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

          <form action="/login" method="POST">
            <div className="row product-detail">
              <div className="col-7">
                <label for="email" className="form-label">E-mail:</label>
                <input
                  id="email"
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Informe o seu e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="col-7">
                <label for="pwd" className="form-label">Senha:</label>
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
                <button type="submit" className="buy-now-button">Entrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Login