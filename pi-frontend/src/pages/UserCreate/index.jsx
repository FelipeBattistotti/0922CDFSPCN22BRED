import React, { useState } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const UserCreate = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [pwd, setPwd] = useState()
  const [pwdConfirm, setPwdConfirm] = useState()

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

					<form action="/user" method="POST">
						<div className="row product-detail">
							<div className="col-12">
								<label for="name" className="form-label">Nome:</label>
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
							<div className="col-12">
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
								<label for="pwdConfirm" className="form-label">Confirmar Senha:</label>
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
								<button type="submit" className="buy-now-button">Salvar</button>
							</div>
						</div>
					</form>
				</div>
			</div>

      <Footer />
    </>
  )
}
export default UserCreate