import React from 'react'
import "materialize-css"
import "./NavBar.css"
import { NavLink } from "react-router-dom"
export const NavBar = (props) => {
    return (
        <div>
           <nav className="nav">
                <div className="nav-wrapper">
                    <a href="/" className="right brand-logo">Hello</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/aboutme">About Me</NavLink></li>
                        <li><NavLink to="/myapps">My Apps</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
