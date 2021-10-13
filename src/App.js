import React, {useState, useEffect } from 'react'
import './main.scss'
import Nav from './components/Nav/Nav'
import SideBar from './components/sidebar/sidebar'
import Mail from './components/email/Mail'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Dancer from './pages/Dancer/Dancer'
import Developer from './pages/Developer/Developer'
import Contact from './pages/Contact/Contact'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Loading from './components/loading/Loading'
/* import { motion } from 'framer-motion'

const loadingVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4
    }
  },
  exitOut: {
    opacity: 0,
    transition: {
        duration: 0.4
    }
}
} */

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 4000)
}, [])

  return (
    <div>
      {loading ? 
        <div
         /*  variants={loadingVariants}
          initial="hidden"
          animate="visible" */
          > 
            <Loading loading={loading} setLoading={setLoading} />
         
          </div>
        :
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{duration: 0.4}}>
        <Nav />
        <SideBar />
        <Mail />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/developer" component={Developer}/>
                        <Route path="/dancer" component={Dancer}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
        </div>
}

      </div>
  );
}

export default App;
