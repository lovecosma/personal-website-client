import './App.css';
import { NavBar } from "./components/NavBar"
import { Intro } from "./components/Intro"
import { AboutMe } from "./components/AboutMe"
import { Refresh } from "./components/Refresh"
const App = (props) => {
  return (
    <div className="container white-text">
        <Refresh/>
        <NavBar/>
        <Intro/>
        <AboutMe/>
    </div>
  );
}

export default App;
