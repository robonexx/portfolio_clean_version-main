import React from 'react';
import { motion } from 'framer-motion';
import './sidebar.scss';
import { FiLinkedin, FiGithub, FiFacebook, FiInstagram } from 'react-icons/fi';

const SideBar = () => {
  return (
    <motion.div
      className='sidebar'
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className='social'>
        <a
          href='https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          <FiLinkedin className='soc-item soc-icon' />
        </a>

        <a href='https://github.com/robonexx' target='_blank' rel='noreferrer'>
          <FiGithub className='soc-item soc-icon' />
        </a>

        <a
          href='https://facebook.com/robert.r.wagar'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          <FiFacebook className='soc-item soc-icon' />
        </a>

        <a
          href='https://www.instagram.com/r.o.b_o.n.e/'
          target='_blank'
          rel='noreferrer'
        >
          <FiInstagram className='soc-item soc-icon' />
        </a>
      </div>
    </motion.div>
  );
};

export default SideBar;
