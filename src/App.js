import React, { useState, useEffect } from 'react';
import Landing from './pages/Landing/Landing';
import Nav from './components/Nav/Nav';
import SideBar from './components/sidebar/sidebar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Dancer from './pages/Dancer/Dancer';
import Developer from './pages/Developer/Developer';
import Contact from './pages/Contact/Contact';
import { Switch, Route, useLocation } from 'react-router-dom';
import Loading from './components/loading/Loading';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Loading loading={loading} setLoading={setLoading} />
        </div>
      ) : (
        <div>
          <Nav />
          <SideBar />
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path='/' component={Landing} />
              <Route exact path='/home' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
              <Route path='/developer' component={Developer} />
              <Route path='/dancer' component={Dancer} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export default App;
