import React from "react";
import "./Products.scss";

function Products() {
  return (
    <div>
      <section className="card-wrapper">
        <section className="card">
          <img
            src="/src/assets/all-products/clothingImages/image1.png"
            alt="Clothe"
          />
          <div className="card-details-wrapper">
            <div className="card-details">
              <h3 className="card-title">Classic Monochrome Tees</h3>
            </div>
            <div className="stock">
              <p>IN STOCK</p>
              <div className="price">$35.00</div>
            </div>
          </div>
        </section>
        <section className="card">
          <img
            src="/src/assets/all-products/clothingImages/image1.png"
            alt="Clothe"
          />
          <div className="card-details-wrapper">
            <div className="card-details">
              <h3 className="card-title">Classic Monochrome Tees</h3>
            </div>
            <div className="stock">
              <p>IN STOCK</p>
              <div className="price">$35.00</div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Products;
