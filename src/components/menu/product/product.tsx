import { useDispatch } from "react-redux";
import { Product } from "../../../services/product";
import { useAppSelector } from "../../../store/hooks";
import { addToBasket, increaseAmount } from "../../../store/slices/basket";
import { ProductFeatures } from "../productFeatures/productFeatures";
import "./product.scss";

type SingleProductProps = {
  product: Product;
};

export const SingleProduct = ({ product }: SingleProductProps) => {
  const basketState = useAppSelector((state) => state.basket);
  const dispatch = useDispatch();

  const handleAddCard = () => {
    
    if (basketState.find((item) => item.product.id == product.id))
      dispatch(increaseAmount(product.id));

    else dispatch(addToBasket(product));
  };

  return (
    <div className="single-product">
      <div className="product-content">
        <h1>{product.title}</h1>
        <h3>{product.description}</h3>
        <button onClick={handleAddCard}>
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
