import React, {useContext} from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem';

const Cart = ({isOpen, setIsOpen}) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        const cartItem = {...item, amount: 1}
        cartCtx.addItem(cartItem)
    }

    const cartItems = 
    <ul className={classes['cart-items']}>
        {
           cartCtx.items.map(item=><CartItem 
            totalAmount={totalAmount} 
            name={item.name} 
            amount={item.amount} 
            description={item.description} 
            price={item.price} key={item.id}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)} />)
        }
    </ul>;


        const isOpenHandler = () => {
            setIsOpen(!isOpen)
        }

    return (
        <>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={isOpenHandler}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal> 
        </>
    )
}

export default Cart
