import React from 'react';
import './AboutDancer.scss';
import { motion } from 'framer-motion';
import Img from '../../assets/video/judge_solo.webm';

const transition = { duration: 2.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    x: 100,
    y: 0,
  },
  animate: {
    x: 0,
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 1,
    transition: { duration: 1.2, ...transition },
  },
};

const AboutDancer = () => {
  return (
    <motion.div
      className='about-dancer noselect'
      /* initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      transition={{ duration: 0.6 }} */
    >
      <motion.video
        alt='rob'
        autoPlay='false'
        controls='controls'
        className='about-video'
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 0.6, duration: 2 }}
      >
        <source src={Img} type='video/webm' />
      </motion.video>
      <motion.div
        className='text-animation'
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.span className='first' variants={firstName}>
          <motion.span variants={letter}>R</motion.span>
          <motion.span variants={letter}>O</motion.span>
          <motion.span variants={letter}>B</motion.span>
        </motion.span>

        <motion.span className='last' variants={lastName}>
          <motion.span variants={letter}>O</motion.span>
          <motion.span variants={letter}>N</motion.span>
          <motion.span variants={letter}>E</motion.span>
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        exit={{ opacity: 0, scaleY: 0 }}
        transition={{ duration: 0.6 }}
        className='about-text-dancer'
      >
        <h1>ABOUT</h1>
        <p>
          Robert "Rob One" Wägar is a Swedish pioneer in HipHop and is one of
          Sweden's most respected teachers and dancers of all time. During his
          long career that extends for 30 years, he has taught at Sweden's most
          prominent schools like University College of Dance, House Of Shapes,
          Dance Center Stockholm, Ballet Academy and is currently head teacher
          of HipHop on Åsafolkhögskolans One-style education. Robert has studied
          for USA's pioneers and has received the "Original Style Locking Master
          student in 2007" He has choreographed for television,
          Melodifestivalen, and other programs, artists such as Wy-Clef,
          Navigators, Carola, Basic Element etc. Roberts been judging around
          sweden n europe for the past 10 years. Competitions like JD Paris day
          one 2014, Uk Bboy Preselections, Sdk preselections, GetUp2GetDown,
          Fdo, Sdr, Hoodsfred, Baltic session, GBG city Jam amongst many other
          battles, Robert is the educator behind some of the world's most
          prominent Swedish dancers today.
        </p>
        <br />
      </motion.div>
      <div className='dance-text-wrapper'>
      <h1 className="dance-text">DANCE</h1>
      </div>
      
    </motion.div>
  );
};

export default AboutDancer;
