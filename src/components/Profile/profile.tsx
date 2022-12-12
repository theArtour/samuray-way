import React from 'react';
import Post from "../Posts/Post";
import {MessageType, PostDataType} from "../../index";
 //import {MessageType, PostsType} from "../../index";
export type ProfilePropsType = {
    messageText:Array<MessageType>,
    posts:Array<PostsType>
}
type PostsType = {
    id: number,
    messageText: string,
}

export const Profile = function (props:ProfilePropsType) {
    let postsElements = props.posts.map((post) => {
        return <Post message={post.messageText}/>
    })
    return (
        <main className='mainSection'>
            {postsElements}
        </main>
    )
}