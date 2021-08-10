import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

let Index = () => {
  return (
    <Router>
      <App/>
    </Router>
  )
}

ReactDOM.render(<Index/>,
  document.getElementById('root')
);