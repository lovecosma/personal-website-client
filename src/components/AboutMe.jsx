import React from 'react'
import "./AboutMe.css"
import me from "../me.jpeg"
import grad from "../LSUgraduation.jpeg"
import bugsquash from "../bugsquash.png"
import colorwheel from "../colorwheel.png"
import bloodflow from "../bloodflow.jpeg"
import eredita from "../eredita.jpeg"
import us from "../us.JPG"

export const AboutMe = ({history}) => {
    window.addEventListener("scroll", () => {
        if(document.getElementById("color-wheel")){
        document.getElementById("color-wheel").style.transform = "rotate("+window.pageYOffset+"deg)"
        }
    })
    return (
        <div className="about-me-container">
        <section className="about-me">
            <div className="center about-me-header">
                <h2>About Me</h2>
            </div>
                <div className="upper-about-me">
                    <div className="us-container">
                        <img className="us-photo" src={me} alt="Matthew's family" width="425px" height="550px"/>
                        <br></br>
                        <div className="about-me-smaller-photos">
                        <iframe 
                            width="200" 
                            height="200" 
                            src="https://www.youtube.com/embed/oiY8JZ4ikZY" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen 
                        />
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
                                a taste for coding a problem solving. I learned the basics of object oriented programming, embedded hardware, and experimental sound synthesis.
                                In 2017, my team exhibited a game, "Synth Arena", we created together using Unity (video game engine) and github at Baton Rouge's 
                                Red Stick Festival. I was also awarded Best Music and Sound Design by LSU's Digital Art and Design Association for a production entitled "The Bone" for LSU's 72-hr Animation Jam of 2017.
                                Through these projects, I learned that anything is possible with team work and preserverence in the face of complex goals.
                            </p> 
                       </div>
                       <div className="lsu-project-container">
                           <div className='lsu-projects' >
                           <iframe 
                                width="300" 
                                height="200" 
                                src="https://www.youtube.com/embed/_Qicr8nBoHg" 
                                title="YouTube video player" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen 
                            />
                            <iframe 
                                width="300" 
                                height="200" 
                                src="https://www.youtube.com/embed/FPJPKSbf3CI" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen 
                            />
                           </div>
                           <div>
                           </div>
                        </div>  
                        <div className="white-text center" style={{width: "100%"}}>
                            <form action="https://soundcloud.com/user-184171124/sets" >
                                <button type="submit" id="emdm-banner" >My Music from EMDM</button>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
        <section className="about-me-shorter" style={{marginTop: "115px", padding: "15px"}}>
            <div className="lower-about-me">
               <div className="about-me-text-2">
                   <h3>Team work and communication are universal tools.</h3>
                   <p>After graduating college in 2017, I moved back to Georgia near my immediate family. I 
                    began working at Best Buy as a part-time computer sales consultant. I collaborated across over 7 different departments and over 50 associates to deliver a world-class
                    experience to every single one of my customers. I was honored for having the highest revenue in the district during Q3 of the fiscal year of 2017-2018. My NPS rating averaged above 90% 
                    throughout my career at Best Buy spanning 3 promotions, ending at Smart Home Expert. 
                   </p>
                   <p>
                    I enjoyed the work I did with my team at Best Buy and I was always coding independently in my free time. I created a few apps that dealt with DOM manipulation, animating on a canvas, and Object Oriented Javascript. 
                    At this time, I also began practicing more advanced topics like algorithms, data structures and system design. I knew I wanted to make use of my skills as developer in my work environment because I loved learning about 
                    it.
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
                        }}
                        alt="bug squash"/> 
                        <br/>
                        <div id='color-wheel' style={{
                            width: "200px",
                            height: "200px",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundImage: `url(${colorwheel})`,
                            marginLeft: "150px",
                            borderRadius: "35px"
                        }}
                        alt="color wheel"/>  
                    </div>
                </div>
            </div>
            <br></br>
        </section>
        <br></br>
        <section className="about-me">
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
                            Networking with the residents of Savannah, GA through Best Buy helped me to start a career as a local artist and musician at the beginning of 2019. 
                            During this time I performed and produced 2 tracks as my artist's persona, Love Cosma. I appeared live on the local radio, gigged for venues all around town, and I was selling 
                            my graphic art prints to commerical enterprises and as clothing through an online retailer. I adored flexing my creative muscle and gained some inspiring success from it, however, 
                            I wanted a career that I would still love to do, but that would be more stable and reliable for my family's security. In April of 2020, I enrolled in Flatiron School in the Full-stack Software Engineering Program with the intention of breaking into the technology industry.                 
                        </p>
                   </div>
                </div>
            </div>
        </section>
        <section className="about-me-shorter"  style={{marginTop: "115px", padding: "15px", height: "90vh"}}>
            <div className="flatiron-top">
                <div className="flatiron-text">
                    <h3>From Flatiron School student to Flatiron School Instructor.</h3>
                    <p> I found Flatiron School to be the perfect environment for me to grow as a developer. I supplemented my knowledge of multimedia interaction with full-stack development skills. Most importantly, studying at Flatiron School put me in a community where I could network with others in the 
                        industry. I picked up so many tips and tricks for learning and growing as a developer. I started to frequently meet with other students to help debug their code and reclarify major concepts in my own words. Eventually, I caught the eye of other instructors in the organization. I was offered a postion as a Technical Coach with Flatiron School shortly before I graduated. 
                        I simultaneously worked as a Technical Coach with Flatiron School and an Associate Software Engineer with Infosys for a few months until I was offered a full-time position at Flatiron School as an Instructor for the Software Enginnering Team. 
                    </p>
                    <p>
                        I love the work I do with students at Flatiron School. I am close with my coworkers and mentors, and I get to help others in the amazing (sometimes hard and emotional) process of self-transformation. I get to write code and develop full-stack applications with interesting technology everyday. I live in Denver, CO with my
                        wife and daughter. We're expecting a second child in April of 2022. I'm always looking for ways to grow, learn, and lead as a developer, father/husband, musician, and human being.
                        <div style={{
                            width: "100%",
                            height: "300px",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundImage: `url(${us})`,
                            boxShadow: "0 0 8px 8px black inset"
                        }}
                        />
                        <span><h4>  Thanks so much for tuning into my story. Keeping these
                        memories close is a huge motivation that propels me forward everyday.</h4></span>
                    </p>
               
                </div>
                <div  className="flatiron-projects">
                    <div className="flatiron-project-container">
                        <iframe width="400" height="180" src="https://www.youtube.com/embed/U9pBMU9gYWA?start=16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="flatiron-project-container" >
                        <iframe width="400" height="180" src="https://www.youtube.com/embed/Onyck4wJM5U?start=97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="flatiron-project-container" >
                        <iframe width="400" height="180" src="https://www.youtube.com/embed/0Yy6UGNu1Zo?start=177" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="flatiron-project-container" >
                        <iframe width="400" height="180" src="https://www.youtube.com/embed/W-xt8yufdNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="white-text center" style={{width: "100%"}}>
                        <button onClick={() => {
                            history.push("/myapps")
                        }} id="emdm-banner" >All of my Apps</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
