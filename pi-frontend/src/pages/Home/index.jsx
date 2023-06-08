import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import api from "../../services/api"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    const response = await api.get('product')
    setProducts(response.data)
  }

  return (
    <>
      <Header />

      <div className="banner"></div>

      <div className="container products-wrapper">
        <div className="row">
          <div className="col-12">
            <h2 className="products-title">Ofertas</h2>
          </div>

          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-3">
              <section className="product-box">
                <Link
                  to="/product-detail"
                  state={{ id: product.id }}
                >
                  <figure className="product-box_image">
                    <img src={`http://localhost:3000/images/products/${product.image}`} alt="imagen do produto" />
                  </figure>
                  <article className="product-box_data">
                    <h2>
                      {(product.price * ((100 - product.discount) / 100)).toFixed(0)}
                    </h2>
                    <span>
                      {product.discount}% OFF
                    </span>
                    <p>
                      {product.name}
                    </p>
                    <i className="fas fa-truck"></i>
                  </article>
                </Link>
              </section>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </>
  )
}
export default Home