import React from 'react'
import './Intro.css';
import me from "../me.jpg"
import reactLogo from "../react-logo-trans.png"
import railsLogo from "../rails-logo.png"
import jsLogo from "../js-logo.png"
import pgLogo from "../pg-logo.png"
import awsLogo from "../aws-logo.png"
import htmlLogo from "../html-logo.png"

export const Intro = (props) => {
    return (
        <section className="intro">
                <div className="upper-intro">
                    <div>
                        <h1>Hello,</h1>
                        <h2>My name is Matthew Williams</h2>
                        <h3>I'm a software engineer based in Denver, CO</h3>
                        <h4>welcome to my online portfolio.</h4>
                        <h5>Please enjoy getting to know me and my work.</h5>
                        <h6>I'm delighted that you're here  ^_^ </h6>
                    </div>
                    <div className="me-container">
                        <img className="me-photo" src={me} alt="Matthew Williams" width="400px" height="550px"/>
                    </div>
                </div>
                <br></br>
                <br></br>
                <h3 className="center key-tech">Key technology</h3>
                <div className="lower-intro">
                    <img src={pgLogo} alt="pg logo" width="150px" height="150px"/>
                    <img src={railsLogo} alt="rails logo" width="175px" height="175px"/>
                    <img src={reactLogo} alt="react logo" width="150px" height="150px"/>
                    <img src={jsLogo} alt="javascript logo" width="150px" height="150px"/>
                    <img src={htmlLogo} alt="html logo" width="150px" height="150px"/>
                    <img src={awsLogo} alt="aws logo" width="150px" height="150px"/>
                </div>
        </section>
    )
}
