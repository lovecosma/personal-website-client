import React from 'react'
import "./AboutMe.css"
import us from "../us.JPG"
import meGuitar from "../me-guitar.jpeg"
import meSamara from "../me-samara.jpeg"
export const AboutMe = (props) => {
    return (
        <section className="about-me">
                <div className="center">
                </div>
                <div className="upper-about-me">
                    <div className="us-container">
                        <img className="us-photo" src={us} alt="Matthew's family" width="425px" height="550px"/>
                        <div className="about-me-smaller-photos">
                            <img src={meGuitar} alt="Matthew on guitar" width="200px" height="200x"/>
                            <img src={meSamara} alt="Matthew with Samara" width="200px" height="200x"/>
                        </div>
                    </div>
                    <div className='about-me-text-container'>
                       <div>
                            <p>
                                My story starts on Wiesbaden, Hesse, Germany. My father was stationed there in the military at the time.
                                After leaving Germany at 2 years old, my family relocated back my parents' hometown of New Orleans, LA in the US.
                                Over the course of the next 16 years, I would live in places from Louisiana, to Virginia, to Georgia, to Hawaii.
                            </p>
                            <p>
                                At and early age, I developed an interest for music which ignited into a 
                                full passion as I grew older. This passionled me to LSU's brand new Experimental Music and Digital
                                Media Programming for Art and Engineering program. It was here that I cultivated 
                                a taste for coding a problem solving. My team and I exhibited a game, "Synth Arena", we created together using Unity (video game engine) and github at Baton Rouge's Red Stick Festival. I won an award for the best music and sound design for a production entitled "The Bone".
                                Overal[, I learned the value of open communication and preserverence in the face of complex goals as a team.
                            </p>
                       </div>
                       <div>

                       </div>
                    </div>
                </div>
        </section>
    )
}
