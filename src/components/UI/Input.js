import classes from './Input.module.css';
import {forwardRef} from "react";

export default forwardRef(function Input({input, label}, ref){
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input ref={ref} {...input} />
        </div>
    );
})