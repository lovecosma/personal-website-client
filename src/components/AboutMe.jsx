import React from 'react'
import "./AboutMe.css"
import us from "../us.JPG"
import meGuitar from "../me-guitar.jpeg"
import meSamara from "../me-samara.jpeg"
export const AboutMe = (props) => {
    return (
        <section className="about-me">
                <div className="center">
                    <h2>About me</h2>
                </div>
                <div className="upper-about-me">
                    <div className="us-container">
                        <img className="us-photo" src={us} alt="Matthew's family" width="425px" height="550px"/>
                        <div className="about-me-smaller-photos">
                            <img src={meGuitar} alt="Matthew on guitar" width="200px" height="200x"/>
                            <img src={meSamara} alt="Matthew with Samara" width="200px" height="200x"/>
                        </div>
                    </div>
                    <div className='about-me-text'>
                        <p>

                        </p>
                        <p>
                            My story starts on Wiesbaden, Hesse, Germany. My father was stationed there in the military at the time.
                            After leaving Germany at 2 years old, my family relocated back my parents' hometown of New Orleans, LA in the US.
                            Over the course of the next 16 years, I would live in places from Louisiana, to Virginia, to Georgia, to Hawaii.
                        </p>
                        <p>
                            At and early age, I developed an interest for music which ignited into a full passion as I grew older. After graduating high school,
                            I enrolled in Lousiana State University as a music performance major on my primary instrument, guitar. LSU had just launched a brand new program focusing on the integration of music and technology. 
                            I had a feeling that I might enjoy working with computers, and had always wanted to. I took a chance and switched my major to Experimental Music with a minor in Digital Media Programming for Art and Engineering (EMDM) and graduated in 2017. 
                        </p>
                        <p>
                            In April of 2020, I relocated to Fort Collins, CO. Embracing the spirit of change, I also enrolled in Flatiron School, a coding bootcamp which offered a program for training in fullstack web devlopment. I was challenged to learn new technology and dive even deeper into familiar technology.
                            I immediately fell in love with full-stack web devlopment and by October of 2020, I was ready to enter the job market. I start working part-time as a Technical Coach with Flatiron School just before graduating at the end of October. 
                            In November of 2020, I received a job offer from Infosys as an Associate Software Engineer. However, at the same time, I was asked to join Flatiron full-time as a Cohort Lead.
                        </p>
                        <p>
                            I enjoyed working with the students as a technical coach, so I accepted the offer from Flatiron School. It's been about a year since I joined Flatiron and it's humbling to be a part of changing people's live on the daily basis.
                            I currrently live in Lakewood, CO with my wife and daughter. We're all anticipating the birth of our second child in April of 2021. Thanks so much for tuning in to my story. I'm always looking for ways to become and better developer, musician, father/husband and 
                            person. Keeping these memories of my journey close helps keep me motivated to that end.
                        </p>
                    </div>
                </div>
        </section>
    )
}
