import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Badge from './Components/Badge';


function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/home" component={Home} exact/>
            <Route path="/badge" component={Badge} exact/>
          </Switch>
      </BrowserRouter>
    </div>

   
  );
}

export default App;
