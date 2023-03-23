import { Product } from "../../../services/product";
import "./productList.scss";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="product-list">
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt="" />
            <div className="content">
              <h4>{product.title}</h4>
            </div>
          </div>
        ))}

        {/* <div className="product-card">
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
        </div> */}
      </div>
    </div>
  );
};
