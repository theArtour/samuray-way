import React from 'react';
import { BrowserRouter, Router, Routes,  Route,  Link } from 'react-router-dom';
import './App.css';
//import {DialogsDataType, DialogsType, MessageType, PostsType} from "./index";
import {Navbar} from "./components/NavBar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/profile";

type AppPropsType = {
    postsProps:Array<PostType>,
    dialogProps:Array<DialogType>,
    messageProps:Array<MessageType>
}
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

function App(props:AppPropsType) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <div className='container'>
                  <div className="main-row">
                      <Navbar/>
                      <Routes>
                          <Route path="/profile/*" element={<Profile posts={props.postsProps}  messageText={props.messageProps}/>}/>
                          <Route path="/dialogs/*" element={<Dialogs dialog={props.dialogProps} message={props.messageProps}/>}/>
                      </Routes>
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
