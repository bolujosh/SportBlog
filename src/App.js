import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import NewPost from "./pages/new-post";
import ReadPost from "./pages/read-post";
import { Switch, Route,Link } from "react-router-dom";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

let App = () => {

  let site_name = "PhreakyWorks";

  return (
    <div className="App">
      <div className="header">
        <div className="left">
        <div className="site-name my-6 mx-6"><Link to="/">{site_name}</Link></div>
        </div>
        <div className="right">
          <div className="inner-box">
          <Link to="/" name="home"><i className="fa fa-home"></i></Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Login} />
        <Route exact path="/post/new" component={NewPost} />
        <Route exact path="/post/read/:id" component={ReadPost} />
        <div className="d-flex not-found">404 NOT FOUND</div>
      </Switch>
   </div>
  )
}

export default App;
