import React from 'react';
//import {DialogsType, MessageType, PostsType} from '../../App';
import style from './Dialogs.module.css';
import {Friend} from "./friend";
import {Message} from "./Message";

type MessageType = {
    id: number,
    messageText: string,
    date: string
}
export type  DialogsType = {
    id: number,
    name: string,
    date: string
}
export type MessageDataType = {
    message:Array<MessageType>,
    dialog:Array<DialogsType>,
}
export const Dialogs = function (props:MessageDataType) {
    let dialogsElements = props.dialog.map((dialog) => {
        return <Friend name={dialog.name} date={dialog.date} id={dialog.id}/>
    });
    let messageElements = props.message.map((message) => {
        return <Message message={message.messageText}/>
    })
    return (
        <div className={style.dialogs}>
            <div className={style.friends}>
                <h2>Messages</h2>
                <div className={style.friendsColumn}>
                    {/*{props.dialogs}*/}
                    {dialogsElements}
                </div>
            </div>
            <div className={style.messages}>
                {/*{props.message}*/}
                {messageElements}
                <input placeholder={'...'} className={style.textMessage} type="text"/>
            </div>
        </div>
    )
}
