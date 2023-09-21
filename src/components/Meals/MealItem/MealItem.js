import classes from './MealItem.module.css'

export default function MealItem({price, name, description}) {
    const displayPrice = `₹ ${price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={description}>{description}</div>
                <div className={classes.price}>{displayPrice}</div>
            </div>
            {/*<div></div>*/}
        </li>
    );
}