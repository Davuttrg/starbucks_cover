import { useEffect, useState } from "react";
import { SingleProduct } from "../../components/menu/product/product";
import { ProductList } from "../../components/menu/productList/productList";
import product, { Product } from "../../services/product";
import "./menu.scss";

export const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  useEffect(() => {
    product.getAll().then((response) => {
      setProducts(response);
      setSelectedProduct(response[0]);
    });
  }, []);

  return (
    <section className="menu-section">
      <div className="single-product-container">
        {selectedProduct && (
          <SingleProduct product={selectedProduct}></SingleProduct>
        )}
      </div>
      <div className="products-container">
        <ProductList
          onClickProduct={(item) => setSelectedProduct(item)}
          products={products}
        ></ProductList>
      </div>
    </section>
  );
};
