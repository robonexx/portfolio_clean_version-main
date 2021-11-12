import React from 'react';
import './about.scss';
import { motion } from 'framer-motion';
import Img from '../../assets/img/originalCopy.png';

const transition = { duration: 2.4, ease: [0.6, 0.01, -0.05, 0.9] };

const variants = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.5,
    },
  }),
  hidden: { opacity: 0 },
  transition: { duration: 2 },
};
const items = [
  {
    text: 'Music',
    id: 1,
  },
  {
    text: 'Dance',
    id: 2,
  },
  {
    text: 'Develop',
    id: 3,
  },
];

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
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
      staggerChildren: 0.04,
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
    transition: { duration: 1, ...transition },
  },
};

const About = () => {
  return (
    <motion.div
      className='about'
      /* initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      transition={{ duration: 0.6 }} */
    >
      <motion.img
        src={Img}
        alt='rob'
        className='about-img'
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 0.6, duration: 2 }}
      />
      <div className='about-overlay'></div>
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
          <motion.span variants={letter}>E</motion.span>
          <motion.span variants={letter}>R</motion.span>
          <motion.span variants={letter}>T</motion.span>
        </motion.span>

        <motion.span className='last' variants={lastName}>
          <motion.span variants={letter}>W</motion.span>
          <motion.span variants={letter}>Ä</motion.span>
          <motion.span variants={letter}>G</motion.span>
          <motion.span variants={letter}>A</motion.span>
          <motion.span variants={letter}>R</motion.span>
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.2, ...transition },
        }}
        className='details'
      >
        <div className='contact'>Contact robertwagar@gmail.com</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        exit={{ opacity: 0, scaleY: 0 }}
        transition={{ duration: 0.6 }}
        className='about-text'
      >
        <h1>ABOUT</h1>
        <p>
          My name is Robert Wägar Im a 40+ yrs old developer based in Stockholm.
          My background as dancer, producer, choreographer and teacher, has been
          of great inspiration to work with creativity and communication.
          <br />I remember as a kid having a C64 and later Amiga 500 I was
          trying out programming on my computer mostly doing sprites and such...
          Fastforward 2019 I felt I needed something new, I wanted to learn &
          remebering my childhood I was thinking about my interest for computers
          and got in to programming. I Started at freecodecamp due to a
          recommendation from a friend. Then I took a JAVA course at Jensens and
          also a web developer beginner course. The year after that I applied
          and got in to the frontend education at KYH Stockholm and I'm going to
          start my internship at addcode nov 2021 until april 2022.
        </p>
        <br />
      </motion.div>
      {/*  <motion.ul className="about-list">
        {items.map(({ text, id }, i) => (
          <motion.li
            key={id}
            initial='hidden'
            custom={i}
            animate='visible'
            variants={variants}
          >
            {text}
          </motion.li>
        ))}
      </motion.ul> */}
    </motion.div>
  );
};

export default About;
