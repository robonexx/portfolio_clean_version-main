import React, { useState } from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
  const [conLeft, setConLeft] = useState(false);
  const [conRight, setConRight] = useState(false);

  const handleLeftMouseEnter = () => {
    setConLeft(true);
  };
  const handleLeftMouseLeave = () => {
    setConLeft(false);
  };
  const handleRightMouseEnter = () => {
    setConRight(true);
  };
  const handleRightMouseLeave = () => {
    setConRight(false);
  };

  return (
    <motion.div
      className='landing'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scaleX: 0, scaleY: 0 }}
      transition={{ duration: 1, staggerChildren: 2 }}
    >
      <div
        className={`container ${conLeft ? 'hover-left' : null} ${
          conRight ? 'hover-right' : null
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='split left'
          onMouseEnter={handleLeftMouseEnter}
          onMouseLeave={handleLeftMouseLeave}
        >
          <h1>Developer</h1>
          <Link to='/home' className='btn'>
            Enter
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='split right'
          onMouseEnter={handleRightMouseEnter}
          onMouseLeave={handleRightMouseLeave}
        >
          <h1>Dancer</h1>
          <Link to='/homedancer' className='btn'>
            Enter
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
