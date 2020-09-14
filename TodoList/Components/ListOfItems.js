import React from 'react';
import classes from "./ListOfItems.module.css"

const ListOfItems=(props)=>{

    return(<div className={classes.ListOfItems}>
    <input type="checkbox" name="list" value={props.value} onClick={props.checkBoxClicked}></input>
    <label >{props.listvalue}</label>
    <div className={classes.Button}>
    <button onClick={props.click} disabled={props.enablebuttons}>Delete</button>
    <button onClick={props.editClick} disabled={props.enablebuttons}>Edit</button>
    </div>
    </div>)
}
export default ListOfItems;