import React from 'react';
import './Projects.scss';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div className='projects-page'>
      <div className='project-section'>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.6 }}
          className='project-section-title'
        >
          Projects
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className='project-section-sub-title'
        >
          <em>You are welcome to check </em>
          <strong>some of my projects</strong> that I worked on...
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Projects;
