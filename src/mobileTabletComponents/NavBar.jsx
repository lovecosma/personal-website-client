import React from 'react'
import "materialize-css"
import "./NavBar.css"
import M from "materialize-css"
import menuIcon from "../images/menu-icon.png"
import { NavLink } from "react-router-dom"
export class NavBar extends React.Component{

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
          });
    }
    componentDidUpdate(){
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
          });
    }

    render(){
        return (
            <div>
                <div className="nav-container">
                    <nav className="black"> <ul><li><a href="/" data-target="slide-out" className="sidenav-trigger"><i className="material-icons"><img src={menuIcon} width="40px" height="30px" alt="menu"/></i></a></li></ul> </nav>
                </div>
                <div>
                <ul id="slide-out" className="sidenav black">
                <li><div className="user-view">
                    <div className="background center black">
                        <iframe title="geometric" src="https://giphy.com/embed/vPmJKooQbFTOw" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
                    </div>
                    <a href="#name"><span className="white-text name">Matthew Williams</span></a>
                    <a href="#email"><span className="white-text email">williamsmatthew333@gmail.com</span></a>
                </div></li>
                <li><NavLink className="white-text sidenav-close" to="/">Home</NavLink></li>
                <li><NavLink className="white-text sidenav-close" to="/aboutme">About Me</NavLink></li>
                <li><NavLink className="white-text sidenav-close" to="/myapps">My Apps</NavLink></li>                </ul>
                </div>
         </div>
        )
    }
}
