import React from "react";
// import { useState } from "react";
import Item from "../item/Item";
import classes from './List.module.css'

const List = ({items, remove}) => {    
    return (
        <ul className={classes.list} >            
            {items.map((item, index) =>                
                <Item number={index + 1} remove={remove} key={item.id} item={item}>                    
                </Item>                
            )}
        </ul>
    );
}

export default List