import React, {useRef, useState} from 'react'
import classes from './MealForm.module.css'
import Input from '../UI/Input'

const MealForm = (props) => {
    const [error, setError] = useState(true)
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
            setError(true)
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{
                id: 'amount_' + props.id, 
                type:'number', 
                min:'1', 
                max:'5', 
                step: '1', 
                defaultValue: '1'
                }}/>
            <button>Add</button>
            {!error && <span>ERROR</span>}
        </form>
    )
}

export default MealForm
