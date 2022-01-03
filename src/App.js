import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Badge from './Components/Badge';
import SpaceBar from './Components/Pages/spaceBar';

function App() {
  return (
      <BrowserRouter>
        <SpaceBar>
          <Switch>
            <Route exact path="/home" component={Home} />
          </Switch>
        </SpaceBar>
      </BrowserRouter>
  );
}

export default App;


// <Route path="/badge" component={Badge} exact/>