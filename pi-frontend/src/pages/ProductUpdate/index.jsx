import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import api from "../../services/api"

const ProductUpdate = () => {
  const location = useLocation()

  const [name, setName] = useState('')
  const [idProductType, setIdProductType] = useState(1)
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [description, setDescription] = useState('')
  const [product, setProduct] = useState()

  useEffect(() => {
    loadProduct()
  }, [])

  const loadProduct = async () => {
    try {
      const response = await api.get(`product/${location.state.id}`)

      setName(response.data.name)
      setIdProductType(response.data.productType.id)
      setPrice(response.data.price)
      setDiscount(response.data.discount)
      setDescription(response.data.description)
      setProduct(response.data)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  return (
    <>
      <Header />

      {product ? (
        <div className="container products-wrapper">
          <div className="row">
            <div className="col-12">
              <h2 className="products-title">Você está editando: <i>{product.name}</i></h2>
            </div>
          </div>
          <div className="col-12">
            <div className="row product-detail">
              <div className="col-12 col-md-6">
                <label htmlFor="name" className="form-label">Nome:</label>
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Informe o nome do produto"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="id_product_type" className="form-label">Tipo:</label>
                <select
                  id="id_product_type"
                  name="id_product_type"
                  className="form-input"
                  value={idProductType}
                  onChange={e => setIdProductType(e.target.value)}
                >
                  <option value={1}>Tênis</option>
                  <option value={2}>Roupas</option>
                  <option value={3}>Skate</option>
                  <option value={4}>Eletrônicos</option>
                  <option value={5}>Artigos casa</option>
                </select>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="price" className="form-label">Preço:</label>
                <input
                  id="price"
                  className="form-input"
                  type="number"
                  name="price"
                  placeholder="Informe o preço do produto"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="discount" className="form-label">Desconto:</label>
                <input
                  id="discount"
                  className="form-input"
                  type="number"
                  name="discount"
                  placeholder="Informe o desconto do produto"
                  value={discount}
                  onChange={e => setDiscount(e.target.value)}
                />
              </div>
              <div className="col-12">
                <label htmlFor="description" className="form-label">Descrição:</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-input"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="image" className="form-label">Imagem:</label>
                <input
                  id="image"
                  className="form-input"
                  type="file"
                  name="image"
                />
              </div>
              <div className="col-12">
                <button
                  className="buy-now-button"
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </>
  )
}
export default ProductUpdate