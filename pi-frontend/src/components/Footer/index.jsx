import React from "react"

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <article className="footer-data">
                <i className="fas fa-credit-card"></i>
                <h2>Pague no cartão ou dinheiro</h2>
                <p>
                  Com o Livre Cash, você parcela sem juros no cartão ou à vista nos pontos de pagamento. E é sempre seguro!
                </p>
              </article>
            </div>
            <div className="col-12 col-lg-4">
              <article className="footer-data">
                <i className="fas fa-gift"></i>
                <h2>Frete grátis a partir de $ 999</h2>
                <p>
                  Só por se cadastrar no Livre você tem frete grátis em milhares de produtos.
                </p>
              </article>
            </div>
            <div className="col-12 col-lg-4">
              <article className="footer-data">
                <i className="fas fa-user-shield"></i>
                <h2>Segurança, do início ao fim</h2>
                <p>
                  Não gostou? Devolva! No Livre, não há nada que você não possa fazer, porque você está sempre protegido.
                </p>
              </article>
            </div>
          </div>
        </div>
      </footer>
      <div className="sub-footer">
        <div className="container">
          <p>
            Copyright © {new Date().getFullYear()} Livre
          </p>
        </div>
      </div>
    </>
  )
}
export default Footer