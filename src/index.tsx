import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type  MessageType = {
    id: number,
    messageText: string,
    date: string
}
export type DialogType = {
    id: number,
    name: string,
    date: string
}
export type  PostType = {
    id: number,
    messageText: string
}
export type PostDataType ={
    postsData:Array<PostType>
}
export type DialogDataType = {
    dialogsData:Array<DialogType>
}
export type MessageDataType = {
    messageData:Array<MessageType>
}



//posts
export let postsData = [
    {
        id: 1,
        messageText: "My first post in this site",
    },
    {
        id: 2,
        messageText: "Hello everyone",
    },
    {
        id: 3,
        messageText: "How are you",

    },{
        id: 4,
        messageText: "Go to the gum",

    },{
        id: 5,
        messageText: "I haven't eaten anything today",

    }
]

//dialogs
export let dialogsData = [
    {
        id: 1,
        name: "Sofia Romanovna",
        date: ' - 21 окт. 2022'
    },
    {
        id: 2,
        name: "Christina Tabuchikova",
        date: ' - 25 окт. 2022'
    },
    {
        id: 3,
        name: "Eva Braun",
        date: ' - 01 ноя. 2022'
    }, {
        id: 4,
        name: "Dagny Taggart",
        date: ' - 10 ноя. 2022'
    }
]
// message
export let messageData = [
    {
        id: 1,
        messageText: "Привет",
        date: '16:03,26.10.2022'
    },
    {
        id: 2,
        messageText: "Как дела",
        date: '16:13,26.10.2022'
    },
    {
        id: 3,
        messageText: "Скоро буду )",
        date: '16:22,26.10.2022'
    }
]
ReactDOM.render(
    <App postsProps={postsData} dialogProps={dialogsData} messageProps={messageData}/>,
  document.getElementById('root')
);