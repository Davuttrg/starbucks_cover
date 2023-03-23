import { ProductFeatures } from "../productFeatures/productFeatures";
import "./product.scss";

export const SingleProduct = () => {
  return (
    <div className="single-product">
      <div className="product-content">
        <h1>Unicorn Frappe</h1>
        <h3>
          A lower-calorie version of the classic latte. Espresso and
          lactose-free milk come together in perfect harmony to bring lightness
          to your drink.
        </h3>
        <button>
          Add to Card
          <span className="material-symbols-outlined">navigate_next</span>
        </button>
      </div>
      <div className="product-img">
        <img src="img/product3.png" alt="" />
      </div>
      <ProductFeatures></ProductFeatures>
    </div>
  );
};
