import React from 'react';
import './mail.scss'
import { FiMail } from "react-icons/fi";

const Mail = () => {
    return (
        <div className="mail">
            <div className="mail-info">
                <a href="https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/" target="_blank"> <FiMail className="mail-item mail-icon" /></a>
                <h3 className="mail-text">robertwagar@gmail.com</h3>

            </div>
        </div>
     );
}
 
export default Mail;