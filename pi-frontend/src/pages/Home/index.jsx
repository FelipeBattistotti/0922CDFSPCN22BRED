import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <>
      <Header />

      <div className="banner"></div>

      <div className="container products-wrapper">
        <div className="row">
          <div className="col-12">
            <h2 className="products-title">Ofertas</h2>
          </div>
          {/* <% products.forEach((product) => { let finalPrice = (product.price * ((100 - product.discount) / 100)).toFixed(0) %>
            <div className="col-12 col-sm-6 col-lg-3">
              <section className="product-box">
                <a href="/product/detail/<%= product.id %>">
                  <figure className="product-box_image">
                    <img src="/images/products/<%= product.image %>" alt="imagen do produto">
                  </figure>
                  <article className="product-box_data">
                    <h2>
                      <%= toThousand(finalPrice) %>
                    </h2>
                    <span>
                      <%= product.discount %> %OFF
                    </span>
                    <p>
                      <%= product.name %>
                    </p>
                    <i className="fas fa-truck"></i>
                  </article>
                </a>
              </section>
            </div>
          <% }) %> */}
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Home