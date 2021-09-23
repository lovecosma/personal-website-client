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
                    <div className='about-me-text'>
                        <p>
                            My story starts on Wiesbaden, Hesse, Germany. My father was stationed there in the military at the time.
                            After leaving Germany at 2 years old, my family relocated back my parents' hometown of New Orleans, LA in the US.
                            Over the course of the next 16 years, I would live in places from Louisiana, to Virginia, to Georgia, to Hawaii.
                        </p>
                        <p>
                            At and early age, I developed an interest for music which ignited into a full passion as I grew older. After graduating Thibodaux High School 
                            in Thibodaux, LA, I enrolled in Lousiana State University as music performance major on my primary instrument, guitar. I loved studying different 
                            styles of music on the classical guitar for a time, but LSU had just launched a brand new program focusing on the integration of music and technology. 
                            I had a feeling that I might enjoy working with computers, and had always wanted to. I took a chance and switched my major to Experimental Music with a minor in Digital Media Programming for Art and Engineering (EMDM). 
                        </p>
                        <p>
                            After graduating college, I moved back to Savannah, GA to be close to my immediate family who'd settled there since my father retired from the military. There I worked at Best Buy for a while, working my way from a part-time Computer Sales Consultant to full-time Smart Home Expert over the course of three years.
                            It was in the sales environment that I honed my abilities to extensively communicate with clientelle and work in a competitave environment. During this time, I also earned a temporary teaching certification 
                            and spent some time teaching 6th, 7th and 8th grade chorus and general music classes at Southwest Middle School. However, throughout this time in Savannah, I never stopped working on independent projects in javascript.
                            Eventually, I decided that I wanted to have a career that exercised my ability to develop software. 
                        </p>
                        <p>
                            In April of 2020, I relocated to Fort Collins, Co. Embracing the spirit of change, I also enrolled in Flatiron School, a coding bootcamp which offered a program for training in fullstack web devlopment. I was challenged to learn new technology and dive even deeper into familiar technology.
                            I immediately fell in love with full-stack web devlopment and by October of 2020, I was ready to enter the job market. I start working part-time as a Technical Coach with Flatiron School just before graduating at the end of October. 
                            In November of 2020, I received a job offer from Infosys as an Associate Software Engineer. However, at the same time, I was asked to join Flatiron full-time as a Cohort Lead.
                        </p>
                        <p>
                            I enjoyed working with the students as a technical coach, so I accepted the offer from Flatiron School. It's been about a year since I joined my family at Flatiron and I love being able to be a part of changing people's live on the daily basis.
                            I currrently live in Lakewood, Co with my wife and daughter. We're all anxiously awaitng the birth of our second child in April of 2021. Thanks so much for tuning in to my story. I'm always looking for ways to become and better developer and 
                            person and keeping these memories of my journey close is a huge motivation for that.
                        </p>
                    </div>
                </div>
        </section>
    )
}
