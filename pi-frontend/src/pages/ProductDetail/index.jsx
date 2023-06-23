import React, { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { getCookie } from "../../utils"
import api from "../../services/api"

const ProductDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [product, setProduct] = useState()

  useEffect(() => {
    loadProduct()
  }, [])

  const loadProduct = async () => {
    try {
      const response = await api.get(`product/${location.state.id}`)
      setProduct(response.data)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  const handleDelete = async () => {
    try {
      await api.delete(`/product/${location.state.id}`, { headers: { Authorization: getCookie('auth') } })

      alert('Produto excluído!')
      navigate('/')

    } catch (error) {
      alert(error.response.data.error)
    }
  }

  const handleAddCart = () => {}

  return (
    <>
      <Header />

      {product ? (
        <div className="container products-wrapper">
          <div className="row">
            <div className="col-12">
              <h2 className="products-title">
                {`Detalhe do produto: ${product.name}`}
              </h2>
            </div>
          </div>
          <div className="product-detail">
            <div className="row">
              <div className="col-12 col-lg-8">
                <img src={`http://localhost:3000/images/products/${product.image}`} alt="product image" className="product-detail-img" />
                <p className="product-detail-description">
                  {product.description}
                </p>
              </div>
              <div className="col-12 col-lg-4">
                <article className="product-detail-info">
                  <h2 className="product-detail-title">
                    {product.name}
                  </h2>
                  <h3>
                    {product.productType.name}
                  </h3>

                  <p className="product-detail-price small">
                    <span>
                      {`R$ ${product.price}`}
                    </span>
                    /
                    <b>
                      {`${product.discount}% OFF`}
                    </b>
                  </p>
                  <p className="product-detail-price">
                    {`R$ ${(product.price * ((100 - product.discount) / 100)).toFixed(0)}`}
                  </p>

                  <ul className="actions-list">
                    <li>
                      <i className="fas fa-credit-card"></i>
                      <p>Pague em 12 vezes sem juros</p>
                    </li>
                    <li>
                      <i className="fas fa-store"></i>
                      <p>Retirada gratuita nos locais de venda</p>
                    </li>
                  </ul>

                  <button
                    className="buy-now-button"
                    onClick={handleAddCart}
                  >
                    Adicionar ao carrinho
                  </button>

                  <hr />

                  {getCookie('auth') !== '' ? (
                    <>
                      <Link
                        className="action-button edit"
                        to="/product-update"
                        state={{ id: product.id }}
                      >
                        Editar Produto
                      </Link>
                      <button
                        className="action-button delete"
                        onClick={handleDelete}
                      >
                        Remover Produto
                      </button>
                    </>
                  ) : null}
                </article>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </>
  )
}
export default ProductDetail