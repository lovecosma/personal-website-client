import React from 'react'
import "./AboutMe.css"
import us from "../us.JPG"
export const AboutMe = (props) => {
    return (
        <section className="about-me">
                <div className="center">
                    <h2>About me</h2>
                </div>
                <div className="upper-about-me">
                    <div className="us-container">
                        <img className="us-photo" src={us} alt="My family" width="400px" height="550px"/>
                    </div>
                    <div>
                        <p>
                            My story starts on Wiesbaden, Hesse, Germany. My father was stationed there in the military at the time.
                            After leaving Germany at 2 years old, my family relocated back my parents' hometown of New Orleans, LA in the US.
                            Over the course of the next 16 years before I would leave for college, I lived in places from Louisiana, Virginia, to Georgia, to Hawaii.
                        </p>
                        <p>
                            At and early age, I developed an interest for music which I grew older ignited into a full passion. After graduating Thibodaux High School 
                            in Thibodaux, LA, I enrolled in Lousiana State University as music performance major on my primary instrument, guitar. I loved studying different 
                            styles of music on the classical guitar, but LSU had just launched a brand new program focusing on the integration of music and technology. 
                            I had feeling that I might enjoy working with computers and had always wanted to, so I took the chance and switched to a major in 
                            Experimental Music with a minor in Digital Media Programming for Art and Engineering (EMDM). 
                        </p>
                        <p>
                            During my time in the EMDM program, I learned the basics of Javascript like procedural programming, Object Oriented Programming, DOM manipulation,
                            audio interaction, and interactive graphics using libraries such as p5.js, Tone.js. In addition to those aspects of web development, I was also introduced
                            to embedded hardware using Arduino in conjunction with web applications using Processing.js, p5.js, Tone.js, PureData, and Max/MSP. Aside from these software 
                            technologies, I was also working as a Frame technician in LSU's Information Technology Services (ITS) all through my time in college. My time with the ITS gave me a solid understanding
                            of real-world signal processing and problem solving. I was responsible for collaborating with Senior Electric Engineering researcher to resolve trouble tickets related to on-campus 
                            digital and analog telephones as well as CATV issues. 
                        </p>
                    </div>
                </div>
        </section>
    )
}
