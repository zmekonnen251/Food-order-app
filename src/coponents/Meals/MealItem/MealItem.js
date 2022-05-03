import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const { mealData } = props;

  const cartContext = useContext(CartContext);

  const price = `$${mealData.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: mealData.id,
      name: mealData.name,
      amount: amount,
      price: mealData.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{mealData.name}</h3>
        <div className={classes.description}>{mealData.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
