import React from 'react';
import style  from './Navbar.module.css';
import {Dialogs} from "../Dialogs/Dialogs";
import {NavLink} from "react-router-dom";

export const Navbar = function (){
    return(
        <div className={style.nav}>
            <a href="react-1/src/Components/NavBar/Navbar#" className={style.logo} >
            </a>
            <nav className={style.nav}>
                <NavLink to='react-1/src/Components/NavBar/Navbar#' className={`${style.item} `}>Feed</NavLink>
                <NavLink to='/Profile' className={`${style.item} `} >Profile</NavLink>
                <NavLink to='/Dialogs' className={style.item} >Message</NavLink>
                <NavLink to='react-1/src/Components/NavBar/Navbar#' className={style.item} >Logout</NavLink>
                <NavLink to='react-1/src/Components/NavBar/Navbar#' className={style.item} >Explore</NavLink>
                <NavLink to='react-1/src/Components/NavBar/Navbar#' className={style.item} >Trending</NavLink>
                <NavLink to="react-1/src/Components/NavBar/Navbar#" className={style.item} >SIGN IN +</NavLink>
            </nav>
        </div>
    )
}
