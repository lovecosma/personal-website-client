import React from 'react'
import {Intro} from "./Intro"
import {AboutMe} from "./AboutMe"
import {MyApps} from "./MyApps"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {NavBar} from "./NavBar"

export const DesktopRouter = () => {
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
    )
}
