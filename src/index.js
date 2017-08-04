import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import  './css/creative.css';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import  './vendor/magnific-popup/magnific-popup.css';
import './vendor/font-awesome/css/font-awesome.min.css';
//import App from './App';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
//import { IndexRoute, hashHistory} from 'react-router';

const history = createBrowserHistory();

const divStyle = {
  height: '100%'

};

ReactDOM.render( <Router>
  <div style={divStyle}>
  <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
       <div className="container-fluid">
           <div className="navbar-header">
               <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                   <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
               </button>
               <NavLink className="navbar-brand page-scroll" to="/">Start Bootstrap</NavLink>
           </div>
           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav navbar-right">
                   <li>
                       <NavLink className="page-scroll" to="/about">About</NavLink>
                   </li>
                   <li>
                       <NavLink className="page-scroll" to="/services">Services</NavLink>
                   </li>
                   <li>
                       <NavLink className="page-scroll" to="/portfolio">Portfolio</NavLink>
                   </li>
                   <li>
                       <NavLink className="page-scroll" to="/contact">Contact</NavLink>
                   </li>
               </ul>
           </div>
       </div>
   </nav>
   {/*<Router history ={hashHistory}>*/}
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} history={history}/>
      <Route path="/services" component={Services} history={history}/>
    {/*  <Route path="/services(/:article)" component={Services} history={history}/>*/}
      <Route path="/portfolio" component={Portfolio} history={history}/>
      <Route path="/contact" component={Contact} history={history}/>

    </div>
  </Router>, document.getElementById('root'));
