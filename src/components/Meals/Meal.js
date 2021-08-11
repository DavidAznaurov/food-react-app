import React, {useContext} from 'react'
import classes from './Meal.module.css'
import MealForm from './MealForm'
import CartContext from '../../store/cart-context'

const Meal = ({id, name, description, price}) => {
    const cartCtx = useContext(CartContext)
    
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        });
    };


    return (
        <li className={classes.meal}>
            <div><h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
            </div>
            <div>
                <MealForm id={id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default Meal
