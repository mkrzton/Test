import React from 'react';
import './App.css';
import Home from './containers/Home';
import Contact from './containers/Contact';
import Products from './containers/Products';
import About from './containers/About';
import Error from './containers/Errror'
import Single from './containers/Single';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/products" component={Products}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/products/:slug" component={Single}/>
    <Route exact path="/contact" component={Contact}/>
    <Route component={Error} />
    </Switch>
    <Footer></Footer>
    </div>
  );
}

export default App;
