import React from "react";
import classes from "./Item.module.css"

const Item = (props) => {       
    return (
        <li className={classes.item}>
            <div>
                <span>{props.number}</span>
                <span className={classes.text}>{props.item.name}</span>
            </div>            
            <button className={classes.close} onClick={() => props.remove(props.item)}>                
            
            </button>
        </li>
    )
}

export default Item