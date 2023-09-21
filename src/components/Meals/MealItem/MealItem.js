import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";

export default function MealItem({id, price, name, description}) {
    const displayPrice = `₹ ${price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={description}>{description}</div>
                <div className={classes.price}>{displayPrice}</div>
            </div>
            <MealItemForm id={id}/>
        </li>
    );
}