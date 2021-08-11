import React, {useContext, useEffect, useState} from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = ({isOpen, setIsOpen}) => {
    const [btnClass, setBtnClass] = useState(false)
    const cartCtx = useContext(CartContext)
    const totalCartItems = cartCtx.items.reduce((current, item)=>{
        return current + item.amount
    }, 0)

    const isOpenHandler = () => {
        setIsOpen(!isOpen)
    }

    const {items} = cartCtx

    const buttonClasses= `${classes.button} ${btnClass ? classes.bump : ""}`

    useEffect(()=>{
        if(cartCtx.items.length === 0) {
            return
        }
        setBtnClass(true)

        const timer = setTimeout(()=>{
            setBtnClass(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    },[items])

    return (
        <button className={buttonClasses} onClick={isOpenHandler}>
           <span className={classes.icon}>
                <CartIcon />
           </span>
           <span>Your Cart</span>
           <span className={classes.badge}>
               {totalCartItems}
           </span>
        </button>
    )
}

export default HeaderCartButton
