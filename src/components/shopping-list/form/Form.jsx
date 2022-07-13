import React from "react";
import { useState } from "react";
import CustomInput from "../input/CustomInput";
import Button from "../button/button";
import './form-style.css'

const Form = ({create, clear}) => {
    const [ItemText, SetItemText] = useState('')    

    const addNewItem = (e) => {
        e.preventDefault()        
        const newItem = {
            id: Date.now() , name: ItemText
        }
        if (ItemText) {
            create(newItem)                        
        }
        SetItemText('')
    }
    
    const removeItems = (e) => {
        e.preventDefault()
        clear()
    }

    return (
        <form className="form">
            <CustomInput 
                value={ItemText}
                onChange={e => SetItemText(e.target.value)}
                type="text">                    
            </CustomInput>
            <div className="form__btn">
                <Button onClick={addNewItem} type="submit">Добавить в список</Button>
                <Button onClick={removeItems}>Очистить список</Button>
            </div>            
        </form>
    )
}

export default Form
