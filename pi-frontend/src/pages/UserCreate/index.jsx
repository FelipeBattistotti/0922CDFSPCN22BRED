import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import api from "../../services/api"

const UserCreate = () => {
  const navigate = useNavigate()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [pwd, setPwd] = useState()
  const [pwdConfirm, setPwdConfirm] = useState()

  const handleSave = async () => {
    const user = {
      name: name,
      email: email,
      pwd: pwd
    }

    try {
      await api.post('/user', user)

      alert('Usuário criado com sucesso!')
      navigate('/')

    } catch (error) {
      alert(error.response.data.error)
    }
  }

  return (
    <>
      <Header />

      <div className="container products-wrapper">
				<div className="row">
					<div className="col-12">
						<h2 className="products-title">Formulário de Inclusão de Usuário</h2>
					</div>
				</div>
				<div className="col-12">

          <div className="row product-detail">
            <div className="col-12">
              <label htmlFor="name" className="form-label">Nome:</label>
              <input
                id="name"
                className="form-input"
                type="text"
                name="name"
                placeholder="Informe o seu nome"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">E-mail:</label>
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
            <div className="col-12">
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
              <label htmlFor="pwdConfirm" className="form-label">Confirmar Senha:</label>
              <input
                id="pwdConfirm"
                className="form-input"
                type="password"
                placeholder="Informe a confirmação da senha"
                value={pwdConfirm}
                onChange={e => setPwdConfirm(e.target.value)}
              />
            </div>
            <div className="col-12">
              <button
                className="buy-now-button"
                onClick={handleSave}
              >
                Salvar
              </button>
            </div>
          </div>
				</div>
			</div>

      <Footer />
    </>
  )
}
export default UserCreate