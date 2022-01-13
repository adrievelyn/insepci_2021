import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
//import Home from './Components/Home';
//import Services from './Components/Services';
import reportWebVitals from './reportWebVitals';


  const container = document.getElementById('app')

  ReactDOM.render(<App />, container);


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
