import React from 'react'
import './Intro.css';
import me from "../me.jpg"

export const Intro = (props) => {
    return (
        <section className="intro">
                <div>
                    <h1>Hello wanderer,</h1>
                    <h2>My name is Matthew Williams</h2>
                    <h3>I'm a software engineer based in Denver, CO</h3>
                    <h4>welcome to my online portfolio.</h4>
                    <h5>Please enjoy getting to know me and my work.</h5>
                    <h6>I'm delighted that you're here  ^_^ </h6>
                </div>
                <div className="me-container">
                    <img className="me-photo" src={me} alt="Matthew Williams" width="400px" height="550px"/>
                </div>
        </section>
    )
}
