import './App.css';
import { NavBar } from "./components/NavBar"
import { Intro } from "./components/Intro"
import { AboutMe } from "./components/AboutMe"

const App = (props) => {
  return (
    <div className="container white-text">
      <div>
        <h1>Hello</h1>
      </div>
        <NavBar/>
        <Intro/>
        <AboutMe/>
    </div>
  );
}

export default App;
