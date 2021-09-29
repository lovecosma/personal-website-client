import React from 'react'
import "materialize-css"
import "./NavBar.css"
import { NavLink } from "react-router-dom"
export const NavBar = (props) => {
    return (
        <div>
           <nav className="nav container">
                    <a href="/" className="brand-logo"><iframe title="geometric" src="https://giphy.com/embed/vPmJKooQbFTOw" width="100px" height="100px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a>
                    <ul id="nav-mobile" className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/aboutme">About Me</NavLink></li>
                        <li><NavLink to="/myapps">My Apps</NavLink></li>
                    </ul>
            </nav>
        </div>
    )
}
