import React from 'react'
import './main.scss'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Dancer from './pages/Dancer/Dancer'
import Developer from './pages/Developer/Developer'
import Contact from './pages/Contact/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Nav />
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/about" component={About}/>
                      <Route path="/projects" component={Projects}/>
                      <Route path="/developer" component={Developer}/>
                      <Route path="/dancer" component={Dancer}/>
                      <Route path="/contact" component={Contact}/>
                  </Switch>
    </Router>
  );
}

export default App;
