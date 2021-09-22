import './App.css';
import { NavBar } from "./components/NavBar"
import { Intro } from "./components/Intro"
import { AboutMe } from "./components/AboutMe"

const App = (props) => {
  return (
    <div className="container white-text">
        <NavBar/>
        <Intro/>
        <AboutMe/>
    </div>
  );
}

export default App;
