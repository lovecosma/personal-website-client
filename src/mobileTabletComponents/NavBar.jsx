import React from 'react'
import "materialize-css"
import "./NavBar.css"
import M from "materialize-css"
import menuIcon from "../images/menu-icon.png"
import { NavLink } from "react-router-dom"
export class NavBar extends React.Component{

    componentDidMount(){
        let elems = document.querySelectorAll('.sidenav');
        console.log(elems);
            M.Sidenav.init(elems, {});
    }


    render(){
        return (
            <div>
                <div >
                    <nav className="black" style={{padding: "15px", marginTop: "10px"}}><a href="/" className="nav-container"> <img data-target="slide-out" className="sidenav-trigger" src={menuIcon} width="7%" height="3%" alt="menu"/></a></nav>  
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
//Nothing
