import { SingleProduct } from "../../components/menu/product/product";
import { Products } from "../../components/menu/products/products";
import "./menu.scss";

export const Menu = () => {
  return (
    <section className="menu-section">
      <div className="single-product-container">
        <SingleProduct></SingleProduct>
      </div>
      <div className="products-container">
        <Products></Products>
      </div>
    </section>
  );
};
