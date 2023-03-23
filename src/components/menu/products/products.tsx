import "./products.scss";

export const Products = () => {
  return (
    <div className="product-list">
      <div className="product-cards">
        <div className="product-card">
          <img src="img/product1.png" alt="" />
          <div className="content">
            <h4>Unicorn Frappe</h4>
          </div>
        </div>
        <div className="product-card">
          <img src="img/product2.png" alt="" />
          <div className="content">
            <h4>Caramel Frappe</h4>
          </div>
        </div>
        <div className="product-card">
          <img src="img/product3.png" alt="" />
          <div className="content">
            <h4>Caramel Frappe</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
