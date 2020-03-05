import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SpaceX from './components/SpaceX';
import UpcomingLaunch from './components/UpcomingLaunch';
import MissionData from './components/MissionData';
import 'materialize-css/dist/css/materialize.min.css';
import Logo from './assests/spacex-logo.png';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='container'>
          <div className='logo'>
            <img src={Logo} />
          </div>
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/spacex' component={SpaceX} />
            <Route exact path='/upcoming' component={UpcomingLaunch} />
            <Route exact path='/data' component={MissionData} />

            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
