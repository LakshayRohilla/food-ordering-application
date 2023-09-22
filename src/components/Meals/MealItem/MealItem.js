import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

export default function MealItem({id, price, name, description}) {
    const cartCtx = useContext(CartContext);
    const displayPrice = `₹ ${price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={description}>{description}</div>
                <div className={classes.price}>{displayPrice}</div>
            </div>
            <MealItemForm id={id} onAddToCart={addToCartHandler}/>
        </li>
    );
}