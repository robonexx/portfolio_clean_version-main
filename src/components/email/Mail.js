import React from 'react';
import {motion} from 'framer-motion'
import './mail.scss'
/* import { FiMail } from "react-icons/fi"; */

const Mail = () => {
    
    return (
        <motion.div className="mail"
        initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{delay: 1, duration: 0.6}}>
            <div className="mail-info">
                <a href="https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/" target="_blank"> {/* <FiMail className="mail-item mail-icon" /> */}</a>
                <h3 className="mail-text">robertwagar@gmail.com</h3>

            </div>
        </motion.div>
     );
}
 
export default Mail;