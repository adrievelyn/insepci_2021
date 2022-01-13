import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import '../Styles/App.scss';
import Home from './Home';
import Badge from './Badge';
import Navbar from './Pages/Navbar';

function App() {
  return (
      <BrowserRouter>
        <Navbar>
          <Switch>
            <Route exact path="/home" component={Home} />
          </Switch>
        </Navbar>
      </BrowserRouter>
  );
}

export default App;


// <Route path="/badge" component={Badge} exact/>