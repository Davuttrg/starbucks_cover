import { useEffect, useState } from "react";
import { Product } from "../../../services/product";
import "./productList.scss";

type ProductListProps = {
  products: Product[];
  onClickProduct: (product: Product) => void;
};

export const ProductList = ({ products, onClickProduct }: ProductListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const handleClickProduct = (product: Product) => {
    onClickProduct(product);
    setSelectedProduct(product);
  };
  useEffect(() => {
    setSelectedProduct(products[0]);
  }, [products]);

  return (
    <div className="product-list">
      <div className="product-cards">
        {products.map((product) => (
          <div
            onClick={() => handleClickProduct(product)}
            key={product.id}
            className={`product-card ${
              selectedProduct?.id == product.id && "selected"
            }`}
            // className={
            //   "product-card " + selectedProduct?.id == product.id
            //     ? "selected"
            //     : ""
            // }
          >
            <img src={product.image} alt="" />
            <div className="content">
              <h4>{product.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
