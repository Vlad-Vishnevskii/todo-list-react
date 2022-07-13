import React from "react";
import { useState } from "react";
import classes from './styles/shopping-list.module.css'
import List from "./list/List";
import Form from "./form/Form";

const ShoppingList = () => {    
    const data = JSON.parse(localStorage.getItem('itemList'))
    const [listItems, setListItems] = useState(data || [])  
    
    const createItem = (newItem) => {
        setListItems([...listItems, newItem])        
        if (listItems.length > 0) {
            localStorage.itemList = [...listItems, newItem]       
        }
        localStorage.setItem('itemList', JSON.stringify([...listItems, newItem]));        
    }    

    const removeItem = (item) => {
        const filterData = listItems.filter(i => i.id !== item.id)
        setListItems(filterData)
        localStorage.itemList = JSON.stringify(filterData)                    
    }

    const clearList = () => {
        setListItems([])
        localStorage.itemList = JSON.stringify([])         
    }

    return (
        <div className={classes.shoppingList}>
            <div className={classes.shoppingListWrapper}>            
                <h1>Список покупок</h1>
                <Form create={createItem} clear={clearList}/>
                {listItems.length !== 0 
                    ? <List items={listItems} remove={removeItem}></List>
                    : <h2 style={{textAlign: "center"}}>Список пуст</h2>
                }                
            </div>                      
        </div>
    );
}

export default ShoppingList