import { useEffect, useState } from "react";
import { SingleProduct } from "../../components/menu/product/product";
import { ProductList } from "../../components/menu/productList/productList";
import product, { Product } from "../../services/product";
import "./menu.scss";

export const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    product.getAll().then((response) => setProducts(response));
  }, []);

  return (
    <section className="menu-section">
      <div className="single-product-container">
        <SingleProduct></SingleProduct>
      </div>
      <div className="products-container">
        <ProductList products={products}></ProductList>
      </div>
    </section>
  );
};
