import React from 'react'
import "./AboutMe.css"
import us from "../us.JPG"
import meGuitar from "../me-guitar.jpeg"
import grad from "../LSUgraduation.jpeg"
import sa from "../sa.png"
import bone from "../bone.png"
export const AboutMe = (props) => {
    return (
        <div>
        <section className="about-me">
                    <div className="center about-me-header">
                        <h2>About Me</h2>
                    </div>
                <div className="upper-about-me">
                    <div className="us-container">
                        <img className="us-photo" src={us} alt="Matthew's family" width="425px" height="550px"/>
                        <div className="about-me-smaller-photos">
                            <img src={meGuitar} alt="Matthew on guitar" width="200px" height="200x"/>
                            <img src={grad} alt="Matthew with Samara" width="200px" height="200x"/>
                        </div>
                    </div>
                    <div className='about-me-text-container'>
                       <div>
                            <h3> My story actually begins at my birth in Wiesbaden, Hesse, Germany.</h3>
                            <p>
                                My father was stationed there in the military at the time. Traveling long distances would become a theme in my life.
                                After leaving Germany at 2 years old, my family relocated back my parents' hometown of New Orleans, LA.
                                Over the course of the next 16 years, I would live in places from Louisiana, to Virginia, to Georgia, to Hawaii.
                            </p>
                            <p>
                                At and early age, I developed an interest for music which ignited into a 
                                full passion as I grew older. This passion led me to LSU's brand new Experimental Music and Digital
                                Media Programming for Art and Engineering program. It was here that I cultivated 
                                a taste for coding a problem solving. My team and I exhibited a game, "Synth Arena", 
                                we created together using Unity (video game engine) and github at Baton Rouge's 
                                Red Stick Festival. I won an award for the best music and sound design for a production entitled "The Bone".
                                Overall, I learned the value of open communication and preserverence in the face of complex goals as a team.
                            </p> 
                       </div>
                       <div className="lsu-project-container">
                           <div className='lsu-projects' >
                                <div style={{
                                    width: "300px",
                                    height: "200px",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage: `url(${sa})`,
                                    boxShadow: "0 0 5px 10px black"
                                }}/>
                                <div style={{
                                    width: "300px",
                                    height: "200px",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage: `url(${bone})`
                                }}/> 
                           </div>
                           <div>

                           </div>
                        </div>          
                    </div>
                </div>
        </section>
        <section className="about-me" style={{marginTop: "125px"}}>
            <div className="lower-about-me">
               <div className="about-me-text-2">
                   <h2>Continued</h2>
                   <p>With some text</p>
                </div> 
                <div className="about-me-pictures-2 center">
                    <h2>Hello</h2>

                </div>
            </div>

        </section>
    </div>
    )
}
