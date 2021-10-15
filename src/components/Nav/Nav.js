import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
/* import navItems from '../../content/NavContent' */
import MenuItems from '../menuItems/MenuItems'
import Logo from '../logo/Logo'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './nav.scss'

const logoVariants = {
  hidden: {
      opacity: 0,
      fill: "none",
      x: -50
  },
  visible: {
    opacity: 1,
    fill: "#1e2328",
      x: 0,
      transition: {
          type: 'tween',
          delay: 0.4,
          duration: 0.5
      }
  },
  hover: {
    textShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
    scale: 1.4,
    stroke: "#fff",
    strokeWidth: 10,
    transition: {
      duration: 0.5,
        yoyo: Infinity
    }
  }
}

const Nav = ({idx}) => {
    const [active, setActive] = useState(false)
   
    const handleClick = () => {
        setActive(!active)
    }
    
    return (
        
      <div className="nav">
        
        <motion.div
          variants={logoVariants}
            initial="hidden"
          animate="visible"
          whileHover="hover"
          /* transition={{ delay: 0.1, duration: 0.3, type: 'spring', stiffness: 300 }} */
        >
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </motion.div>
        
        
        <motion.div className="menu-icon" onClick={handleClick}
        initial={{ y: -250, opacity: 0 }}
        animate={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.3, type: 'tween'}}
        >
          {active ? <HiX className="hix"/> : <HiMenuAlt3 className="menu3"/>}
        </motion.div>
        <motion.ul className={active ? "nav-menu active" : "nav-menu"}
          initial={{ x: 250, opacity: 0 }}
          animate={{x: 0, opacity: 1}}
          transition={{delay: 0.5, duration: 0.3, type: 'tween'}}
        >
          <MenuItems key={idx} />
            {/* {navItems.map((item, idx) => {
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
        })} */}
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