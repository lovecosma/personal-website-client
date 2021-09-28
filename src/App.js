import './App.css';
import { NavBar } from "./components/NavBar"
import { Intro } from "./components/Intro"
import { AboutMe } from "./components/AboutMe"
import { MyApps } from "./components/MyApps"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = (props) => {
  return (
    <div className="container white-text">
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/aboutme" render={(routerProps) => <AboutMe {...routerProps} />} />
            <Route path="/myapps" component={MyApps} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
