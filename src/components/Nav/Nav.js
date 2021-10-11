import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import navItems from '../../content/NavItems'
import Logo from '../logo/Logo'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './nav.scss'



const Nav = () => {
    const [active, setActive] = useState(false)
   
    const handleClick = () => {
        setActive(!active)
    }
    
    return (
        
      <div className="nav">
        <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3, type: 'spring', stiffness: 300 }}
        >
            <Logo className="logo" />
          </motion.div>
        <motion.div className="menu-icon" onClick={handleClick}
        initial={{ y: -250, opacity: 0 }}
        animate={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.3, type: 'tween'}}
        >
          {active ? <HiX className="hix"/> : <HiMenuAlt3 className="menu3"/>}
        </motion.div>
        <motion.ul className={active ? "nav-menu active" : "nav-menu"}
        >
            {navItems.map((item, idx) => {
              return (
                <motion.li key={idx}
                  initial={{ y: -250, opacity: 0 }}
                  animate={{y: 0, opacity: 1}}
                  transition={{delay: 0.3, duration: 0.3, type: 'tween'}}
                >
              <Link to={item.url} className={item.cName}>
                      {item.title}
                      <small>{item.desc}</small>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
            </div>

     );
}
 
export default Nav;

/* 
 <ul >
                    <li>
                        <Link to="/">
                            Home
                            <small>where we sleep... Zzz</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                            <small>Me? Read here...</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            Projects
                            <small>What I've been up to</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                            <small>Get in touch... E.T phone home...</small>
                        </Link>
                    </li>
                </ul>
*/