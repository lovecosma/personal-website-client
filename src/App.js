import './App.css';
import { NavBar } from "./components/NavBar"
import { AboutMe } from "./components/AboutMe"

const App = (props) => {
  return (
    <div className="container blue">
      <NavBar/>
        <section>
          <AboutMe/>
        </section>
    </div>
  );
}

export default App;
