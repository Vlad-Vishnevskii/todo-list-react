import React from "react";
import classes from "./CustomInput.module.css"

const CustomInput = (props) => {    
    return (       
        <input className={classes.input} {... props}></input>                
    );
}

export default CustomInput