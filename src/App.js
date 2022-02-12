import React, { useState, useEffect } from 'react';
import Landing from './pages/Landing/Landing';
import Nav from './components/Nav/Nav';
import SideBar from './components/sidebar/sidebar';
import Home from './pages/Home/Home';
import HomeDancer from './pages/Home/HomeDancer';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Switch, Route, useLocation } from 'react-router-dom';
/* import Loading from './components/loading/Loading'; */
import { AnimatePresence } from 'framer-motion';
import AboutDancer from './pages/About/AboutDancer';
import { useTheme } from './hooks/useTheme';
import ThemeSelector from './themes/ThemeSelector';
import ScrollToTop from './components/ScrollToTop';

function App() {
  /* const [activeTheme, setActiveTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false) */
  const location = useLocation();
  const { theme, page } = useTheme();
  /* const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []); */
  /* const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };
  useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('light')
        setMountedComponent(true)
    }, []);
 */
  return (
    <div className={`${theme}`}>
      {/* {loading ? (
        <div>
          <Loading loading={loading} setLoading={setLoading} />
        </div>
      ) : ( */}
      <div>
        <Nav />
        <ThemeSelector />
        <SideBar />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <ScrollToTop>
              <Route exact path='/' component={Landing} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/homedancer' component={HomeDancer} />
              <Route path='/about' component={About} />
              <Route path='/aboutdancer' component={AboutDancer} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
            </ScrollToTop>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
