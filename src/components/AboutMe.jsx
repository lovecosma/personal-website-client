import React from 'react'
import "./AboutMe.css"
import us from "../us.JPG"
import meGuitar from "../me-guitar.jpeg"
import grad from "../LSUgraduation.jpeg"
import sa from "../sa.png"
import bone from "../bone.png"
import bugsquash from "../bugsquash.png"
import colorwheel from "../colorwheel.png"
import bloodflow from "../bloodflow.jpeg"
import eredita from "../eredita.jpeg"
export const AboutMe = (props) => {
    window.addEventListener("scroll", () => {
        document.getElementById("color-wheel").style.transform = "rotate("+window.pageYOffset+"deg)"
        console.log("luaching");
    })
    return (
        <div className="about-me-container">
        <section className="about-me">
            <div className="center about-me-header">
                <h2>About Me</h2>
            </div>
                <div className="upper-about-me">
                    <div className="us-container">
                        <img className="us-photo" src={us} alt="Matthew's family" width="425px" height="550px"/>
                        <br></br>
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
                        <br></br>        
                        <div className="white-text center" style={{width: "100%"}}>
                            <form action="https://soundcloud.com/user-184171124/sets" >
                                <button type="submit" id="emdm-banner" >Check out more music from EMDM here</button>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
        <section className="about-me-shorter" style={{marginTop: "125px", padding: "15px"}}>
            <div className="lower-about-me">
               <div className="about-me-text-2">
                   <h3>Team work and communication are universal tools.</h3>
                   <p>After graduating college in 2017, I still wasn't entirely sure what I wanted to be when I grew up. I moved back to Georgia where my immediate family was located and I 
                    I began customer-facing sales roles at Best Buy. I started as a part-time computer sales consultant. I collaborated over seven different departments to deliver a world-class
                    to every single one of my customers. I was honored for having the highest revenue in the district during Q3 of the fiscal year of 2017-2018. My NPS rating averaged above 90% 
                    throughout my careerat Best Buy spanning 3 promotions. 
                   </p>
                   <p>
                    I enjoyed the work I did with my team at Best Buy, but I was always coding in my free time. A few apps that dealt with DOM manipulation, animating on a canvas, and Object Oriented Javascript. using data sctructures. 
                    At this time, I also began practicing more advanced topics like algorithms, data structures and system design. I knew I wanted to make use of my skills as developer in my work environment.
                   </p>
                </div> 
                <div className="about-me-pictures-2">
                    <div className="center" style={{padding: "40px"}}>
                        
                        <div style={{
                            width: "100%",
                            height: "250px",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundImage: `url(${bugsquash})`,
                            boxShadow: "0 0 8px 8px black inset"
                        }}/> 
                        <br/>
                        <div id='color-wheel' style={{
                            width: "200px",
                            height: "200px",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundImage: `url(${colorwheel})`,
                            marginLeft: "150px"
                        }}/>  
                    </div>
                </div>
            </div>
            <br></br>
        </section>
        <br></br>
        <section className="about-me-shorter">
        <div className="about-me-text-3">
                <div className="love-cosma-pictures">
                    <div className="music-video">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/hcXohBUeFTY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="art-links">
                    <div style={{
                            width: "125px",
                            height: "125px",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundImage: `url(${bloodflow})`
                        }}/> 
                    
                    <iframe width="200" height="125" src="https://www.youtube.com/embed/f5QvJd-QgC0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div style={{
                            width: "125px",
                            height: "125px",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundImage: `url(${eredita})`
                        }}/> 
                    </div>
                </div>
                <div className="love-cosma-text">
                   <div className='love-cosma-text-container'>
                    <h3>Hardwork, dedication, and optimism will bring you places.</h3>
                        <p>
                            My communication with so many residents of Savannah, GA throuogh Best Buy really helped me start a career as an artist and musician. 
                            During this time I performed and produced 2 tracks as my artist persona, Love Cosma. I appeared live on the local radio, gigged for venues all around town, and I was selling 
                            my art graphic art prints for commerical enterprises and also as clothing through an online retailer. I adored flexing my creative muscle and gaining some success from it, however, 
                            I wanted a career that I would still love to do, but would be more stable and reliable for my family's security. In April of 2020, I enrolled in Flatiron School in the Full-stack Software Engineering Program                 
                        </p>
                   </div>
                </div>
            </div>
        </section>
    </div>
    )
}
