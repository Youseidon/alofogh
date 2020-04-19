import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { ThroughProvider } from 'react-through'
import { LocalizeProvider } from "react-localize-redux"
import * as serviceWorker from './serviceWorker';

const theApp = (
  <LocalizeProvider>
    <ThroughProvider>
      <App />
    </ThroughProvider>
  </LocalizeProvider>
)

const startApp = () => {
  try {
    ReactDOM.render(theApp, document.getElementById('root'));
    serviceWorker.unregister();
  } catch(err){
    document.getElementById("root").innerHTML = err.message;
  }
}
if (window.cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}
