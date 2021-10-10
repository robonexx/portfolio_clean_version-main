import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import navItems from '../../content/NavItems'
import Logo from '../logo/Logo'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './nav.scss'
import { MenuButton } from '../menubutton/MenuBtn'



const Nav = () => {
    const [active, setActive] = useState(false)
    const [rotate, setRotate] = useState('')
    const [isOpen, setOpen] = useState(false);

  const canvasStyle = {
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
  };

  const menuButtonStyle = {
    marginLeft: "2rem"
  };

    const handleClick = () => {
        setActive(!active)
    }
    
    return (
        
        <div className="nav">
             {/* <div style={canvasStyle}>
      <MenuButton
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        style={menuButtonStyle}
                />
        </div> */}
            <Logo className="logo"/>
            <div className="menu-icon" onClick={handleClick}>
        {active ? <HiX className="hix"/> : <HiMenuAlt3 className="menu3"/>}
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {navItems.map((item, idx) => {
          return (
            <li key={idx}>
              <Link to={item.url} className={item.cName}>
                      {item.title}
                      <small>{item.desc}</small>
              </Link>
            </li>
          );
        })}
      </ul>
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