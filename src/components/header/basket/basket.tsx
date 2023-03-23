import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store/hooks";
import {
  BasketState,
  decreaseAmount,
  discardFromBasket,
  increaseAmount,
} from "../../../store/slices/basket";
import "./basket.scss";

export const Basket = () => {
  const basketState = useAppSelector((state) => state.basket);
  const dispatch = useDispatch();

  const handleClickDecrease = (item: BasketState) => {
    if (item.amount == 1) dispatch(discardFromBasket(item.product.id));
    else dispatch(decreaseAmount(item.product.id));
  };
  const handleClickIncrease = (item: BasketState) => {
    dispatch(increaseAmount(item.product.id));
  };

  return (
    <div className="basket-container">
      <span className="material-symbols-outlined">shopping_basket</span>
      {basketState.length > 0 && (
        <div>
          <span className="basket__count">{basketState.length} </span>
          <div className="basket__popup">
            {basketState.map((item) => (
              <div className="basket-item">
                <div className="basket-item__amount">
                  <span onClick={() => handleClickDecrease(item)}>-</span>
                  {item.amount}{" "}
                  <span onClick={() => handleClickIncrease(item)}>+</span>
                </div>
                <div className="basket-item__product">
                  <img width="22" src={item.product.image} alt="" />{" "}
                  {item.product.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
