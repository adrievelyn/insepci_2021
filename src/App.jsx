import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import './App.css';
import '../styles/navbar.css';
import Home from './Components/Home';
import Badge from './Components/Badge';
import SpaceBar from './Components/Pages/spaceBar';

function App() {
  return (
      <Router>
          <SpaceBar>
            <Switch>
              <Route path="/" component={Home} exact/>
            </Switch>
          </SpaceBar>
      </Router>
      
  );
}

export default App;


