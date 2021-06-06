import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Components/HomeComponent/Home';
import DataUser from './Components/RegisterLogin/DataUser';
import Admin from './Components/AdminClass/Admin'
export default function App() {
  return (
    <BrowserRouter >
    
     <h1 className=" m-3 d-flex text-muted justify-content-center " >
       Welcome to Bug Tracker
     </h1>
     <Navigation/>

     <Switch className="app-div">
        <Route exact path="/datauser" >
          <DataUser />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
      
      
    </BrowserRouter>

    
  );
}
