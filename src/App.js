import React, { useState, useEffect } from 'react';
import Landing from './pages/Landing/Landing';
import Nav from './components/Nav/Nav';
import SideBar from './components/sidebar/sidebar';
import Home from './pages/dev/Home/Home';
import HomeDancer from './pages/dancer/home/HomeDancer';
import Contact from './pages/Contact/Contact';
import { Routes, Route, useLocation } from 'react-router-dom';
/* import Loading from './components/loading/Loading'; */
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import ThemeSelector from './themes/ThemeSelector';
import ScrollToTop from './components/ScrollToTop';

function App() {
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
        <ScrollToTop>
          <Nav />
          <ThemeSelector />
          <SideBar />
          <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route exact path='/' element={<Landing />} />
              <Route path='dev' element={<Home />} />
              <Route path='dancer' element={<HomeDancer />} />
              <Route path='contact' element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </ScrollToTop>
      </div>
    </div>
  );
}

export default App;
