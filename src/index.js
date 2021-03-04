import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Top from './components/Top/Top';
import Left from './components/Left/Left';
import Right from './components/Right/Right';

/**
 * React component created using the React.createElement method.
 * A simple h1 element that takes an input and then
 * uses the input as the message to be rendered. 
 */
const Bottom = (message) => React.createElement(
  "h1", 
   { className: 'Bottom-banner'},
   message
);    

ReactDOM.render(
  <React.StrictMode>
    <Top />
    <Left />
    <Right />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(Bottom('Bottom Text'), document.getElementById('banner'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
