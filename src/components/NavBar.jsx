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
                        <li><NavLink to="/aboutme">About Me</NavLink></li>
                        <li><a href="badges.html">My Apps</a></li>
                        <li><a href="collapsible.html">My Art</a></li>
                        <li><a href="collapsible.html">Contact Me</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
