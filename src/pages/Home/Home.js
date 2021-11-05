import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import { motion } from 'framer-motion';
import Img from '../../assets/img/ruperto.jpg';

const Home = () => {
  return (
    <motion.div
      className='home-wrapper'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scaleX: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='headline-wrapper'>
        <motion.h4
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          Hello, my name is{' '}
        </motion.h4>
        <motion.h1
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          Robert Wägar
        </motion.h1>
      </div>

      <motion.section
        className='home-section-top'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <h2>
          I´m a <span>developer</span> with focus on
          <span> frontend / </span> <small> backend</small> &{' '}
          <span>design</span>
          <br />
          <br />
          <br />
          My goal is to create smart <br />
          <b className='bigger-text'>
            user interfaces & useful interactions
          </b>{' '}
          <br />
          by developing rich <br />
          <b className='bigger-text'>web experiences & applications</b> <br />
          <br />
        </h2>
      </motion.section>

      <section className='home-section-mid'>
        <h2>
          I belive that <br />
          <b>Creativity, art, design, and technology</b>
          <br />
          <i>
            in the hands of the right minds has the tools to solve our future
            problems.
          </i>
          <br />
          When not learning new & playing around with code
          <br />
          I´m working as a <b>dance</b> teacher & workshop / event producer
        </h2>
      </section>

      <section className='home-section-bottom'>
        <div className='text-section'>
          <h2>
            <b>About me</b> <br />
            <br />
            My name is Robert, I´m a creative mind who loves building things for
            the internet. I started a few years back when I felt that i needed
            to learn new things. So i got recommended to try out coding at{' '}
            <Link
              to={{ pathname: 'https://freecodecamp.org/' }}
              target='_blank'
            >
              freecodecamp...{' '}
            </Link>
            And so my journey started.
            <br />
            <br />
            Currently Im studying at KYH Frontend developer education. Besides
            studying at the education I´m also taking courses on{' '}
            <Link to={{ pathname: 'https://www.udemy.com/' }} target='_blank'>
              udemy
            </Link>{' '}
            and doing projects to broaden my knowledge and skills. I´m also
            doing an internship 15th of nov 2021 - 1st of april 2022
            <br />
            <br />
          </h2>
          <h4>
            <span>Here are the technologies I worked with so far:</span> <br />
            <br />
          </h4>

          <div className='technologies'>
            <h4>Javascript</h4>
            <h4>React</h4>
            <h4>Node.js</h4>
            <h4>Firebase</h4>
            <h4>MongoDb</h4>
            <h4>Github</h4>
            <h4>Figma</h4>
            <h4>HTML/Css</h4>
          </div>

          <br />
          <br />
          <h2>
            So why did I write so far? Cause the knowledge and learning is
            endless & my goal is to keep learning as I go and work with
            different projects
            <Link to='/about'>Read more about me...</Link>
          </h2>
        </div>

        <div className='img-section'>
          <div className='img-container'>
            <div className='img-overlay'></div>
            <img src={Img} alt='' />
          </div>
        </div>
      </section>
      {/*  <Footer /> */}
    </motion.div>
  );
};

export default Home;
