import './App.css';
import { NavBar } from "./components/NavBar"
import { AboutMe } from "./components/AboutMe"
import me from "./me.jpg"
const App = (props) => {
  return (
    <div className="container white-text">
        <NavBar/>
        <section className="intro">
         <div>
            <h1>Hello wanderer,</h1>
            <h2>My name is Matthew Williams</h2>
            <h3>welcome to my online portfolio.</h3>
            <h4>Please enjoy getting to know me and my work.</h4>
            <h5>I'm delighted that you're here  ^_^ </h5>
         </div>
         <div className="me-container">
           <img src={me} alt="Matthew Williams" width="400px" height="550px"/>
         </div>
        </section>
        <section className="about-me">
          <AboutMe/>
        </section>
    </div>
  );
}

export default App;
