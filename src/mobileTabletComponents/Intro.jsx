import React from 'react'
import './Intro.css';
import me from "../images/me.jpg"
import reactLogo from "../images/react-logo-trans.png"
import railsLogo from "../images/rails-logo.png"
import jsLogo from "../images/js-logo.png"
import pgLogo from "../images/pg-logo.png"
import awsLogo from "../images/aws-logo.png"
import htmlLogo from "../images/html-logo.png"
import M from "materialize-css"

class Intro extends React.Component{

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.carousel');
            M.Carousel.init(elems, {});
          });
    }

    componentDidUpdate(){
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.carousel');
            M.Carousel.init(elems, {});
          });
    }

    
    render(){
        return (
            <section className="mobile-intro-section center">
                        <div>
                            <h1>Hello,</h1>
                            <h2>My name is Matthew Williams</h2>
                            <h3>I'm a software engineer based in Denver, CO</h3>
                            <h4>welcome to my online portfolio.</h4>
                            <h5>Please enjoy getting to know me and my work.</h5>
                            <h6>I'm delighted that you're here  ^_^ </h6>
                            <div style={{marginTop: "50px"}}><img src={me} alt="Matthew Williams" width="275px" height="400px"/></div>
                        </div>
                        <div style={{marginTop: "50px"}}>
                            <div className="carousel">
                            <h4 >Key technology</h4>
                                <a className="carousel-item" href="#one!"><img src={pgLogo} alt="pg logo" width="150px" height="175px"/></a>
                                <a className="carousel-item" href="#two!"><img src={railsLogo} alt="rails logo" width="175px" height="175px"/></a>
                                <a className="carousel-item" href="#three!"><img src={reactLogo} alt="react logo" width="150px" height="175px"/></a>
                                <a className="carousel-item" href="#four!"><img src={jsLogo} alt="javascript logo" width="150px" height="175px"/></a>
                                <a className="carousel-item" href="#five!"><img src={htmlLogo} alt="html logo" width="150px" height="175px"/></a>
                                <a className="carousel-item" href="#six!"><img src={awsLogo} alt="aws logo" width="150px" height="175px"/></a>
                            </div>
                        </div>
            </section>
        )
    }
}

export default Intro
