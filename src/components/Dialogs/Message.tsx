import React from 'react';
import style from './Dialogs.module.css';
//import {MessageType} from "../../App";
export type MessagePropsType = {
    message:string
}
export const Message = function (props:MessagePropsType){
    return(
        <div className={style.message}>
            {props.message}
        </div>
    )
}
