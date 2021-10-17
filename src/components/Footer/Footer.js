import React from 'react';
import './footer.scss'
import {motion} from 'framer-motion'
import { FiLinkedin, FiGithub, FiFacebook, FiInstagram, FiMail } from "react-icons/fi";


const Footer = () => {
    return (
        <motion.div className="footer"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}>
            
            <div className="email-info">
            <FiMail className="email-item email-icon" />
                <h3 className="email-text">robertwagar@gmail.com</h3>

            </div>

        <div className="footer-social">
                <a href="https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/" target="_blank"> <FiLinkedin className="footer-item footer-icon" /></a>
            
                <a href="https://github.com/robonexx" target="_blank"><FiGithub className="footer-item footer-icon"/></a>
                       
            <a href="https://facebook.com/robert.r.wagar" target="_blank"> < FiFacebook className="footer-item footer-icon" /></a>
            
            <a href="https://www.instagram.com/r.o.b_o.n.e/" target="_blank">< FiInstagram className="footer-item footer-icon"/></a>
        </div>
    </motion.div>
     );
}
 
export default Footer;