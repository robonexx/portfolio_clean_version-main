import React from 'react';
import './sidebar.scss'
import { FiLinkedin, FiGithub,FiFacebook, FiInstagram } from "react-icons/fi";

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="social">
                    <a href="https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/" target="_blank"> <FiLinkedin className="soc-item soc-icon" /></a>
                
                    <a href="https://github.com/robonexx" target="_blank"><FiGithub className="soc-item soc-icon"/></a>
                           
                <a href="https://facebook.com/robert.r.wagar" target="_blank"> < FiFacebook className="soc-item soc-icon" /></a>
                
                <a href="https://www.instagram.com/r.o.b_o.n.e/" target="_blank">< FiInstagram className="soc-item soc-icon"/></a>
            </div>
        </div>
     );
}
 
export default SideBar;