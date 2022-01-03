import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Badge from './Badge';
import SpaceBar from './Pages/spaceBar';

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