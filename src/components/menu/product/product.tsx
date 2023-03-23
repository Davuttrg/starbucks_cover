import { Product } from "../../../services/product";
import { ProductFeatures } from "../productFeatures/productFeatures";
import "./product.scss";

type SingleProductProps = {
  product: Product;
};

export const SingleProduct = ({ product }: SingleProductProps) => {
  return (
    <div className="single-product">
      <div className="product-content">
        <h1>{product.title}</h1>
        <h3>{product.description}</h3>
        <button>
          Add to Card
          <span className="material-symbols-outlined">navigate_next</span>
        </button>
      </div>
      <div className="product-img">
        <img src={product.image} alt="" />
      </div>
      <ProductFeatures></ProductFeatures>
    </div>
  );
};
