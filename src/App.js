import React from "react";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import { Switch, Route,Link,useLocation } from "react-router-dom";
import "./App.css";
import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

let App = () => {

  let site_name = "9jaTweet";
  let loc = useLocation();

  return (
    <div className="App">
      <div className="header">
        <div className="left">
        <div className="site-name my-6 mx-6"><Link to="/">{site_name}</Link></div>
        </div>
        <div className="right">
          <div className="inner-box">
          <Link to="/" name="home">Home</Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Login}/>
      </Switch>
   </div>
  )
}

export default App;