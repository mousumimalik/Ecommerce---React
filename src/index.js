import React from 'react';
import ReactDOM from 'react-dom/client';
import jQuery from 'jquery';
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import "./index.css";
import "font-awesome/css/font-awesome.css";

// var element = <button className='btn btn-danger'>Hello World!</button>;
// ReactDOM.render(<NavBar/>, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);