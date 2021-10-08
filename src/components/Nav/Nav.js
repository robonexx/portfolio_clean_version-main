import React from 'react'

import { Link } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
    /* const { ref } = useResize() */
    
    return (
        
            <div className="nav">
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
            </div>

     );
}
 
export default Nav;