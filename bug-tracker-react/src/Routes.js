import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './Components/Home/Home'
  import Register from './Components/RegisterLogin/Register'
  import RateUs from './Components/RateUs/RateUs'
  import ProjectData from './Components/ProjectData/ProjectData'
  import ContactUs from './Components/Contact/Contact'
  import Feed from './Components/Feed/Feed'
  import Profile from './Components/Profile/Profile'
export default function router() {
    return (
        <Router>
      <div>
        <Switch>
        <Route exact path="/projectdata">
                <ProjectData />
            </Route>
            <Route exact path="/feed">
                <Feed />
            </Route>
            <Route exact path="/register-login">
                <Register />
            </Route>
            <Route exact path="/contactus">
                <ContactUs />
            </Route>
            <Route exact path="/rateus">
                <RateUs />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
      </div>
    </Router>
    )
}

