import React from 'react';
import {Link} from 'react-router-dom'
/* import { motion } from 'framer-motion' */
import navItems from '../../content/NavContent';
/* 
const itemVariants = {
    hidden: {
        opacity: 0,
        y: -250
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            delay: 0.4,
            duration: 0.3
        }
    },
    hover: {
        rotate: -5,
        x: 0,
        y: 0,
        scale: 1.01,
    }
} */

const MenuItems = () => {

    return (
        
        <>
        {navItems.map((item, idx) => {
              return (
                  <li key={idx}
                     /*  variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover" */
                >
              <Link to={item.url} className={item.cName}>
                      {item.title}
                      <small>{item.desc}</small>
              </Link>
            </li>
          );
        })}
        </>
    );
}
 
export default MenuItems;