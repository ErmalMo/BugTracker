import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import { Card } from 'reactstrap';
import Home from './Home';
import DataUser from './DataUser';

export default function App() {
  return (
    <BrowserRouter >
    
     <h1 className="m-3 d-flex justify-content-center">
       Welcome to Bug Tracker
     </h1>

     <Navigation/>

     <Switch>
        <Route exact path="/datauser" >
          <DataUser />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
