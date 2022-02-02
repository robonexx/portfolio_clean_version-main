import React from 'react';
import { Link } from 'react-router-dom';
import './HomeDancer.scss';
import { motion } from 'framer-motion';
/* import BgImg from '../../assets/img/dance.png'; */

const HomeDancer = () => {
  return (
    <motion.div
      className='home-dancer-wrapper'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scaleX: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      <div class='bg-img-wrapper' alt=''>
        <div class="bg-img"></div>
        <h2>Rob One</h2>
      </div>
      <div className='head-wrapper'>
        <motion.h4
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Hello, my name is{' '}
        </motion.h4>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.6 }}
          className='rjw'
        >
          Robert Wägar
        </motion.h1>
      </div>

      <motion.section
        className='home-section-top'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        <h2>
          I´m a <span>Dancer</span> with a passion for Locking & Hip-Hop...{' '}
          <span>everything dance.</span>
          <br />
          <br />
          <br />
          My goal is to spread the knowledge to the young <br />
          <b className='bigger-text'>
            So they can Use it in their process to become better
          </b>{' '}
          <br />
          I also belive that the future is in the hands of our young with the
          right
          <br />
          <b className='bigger-text'> knowledge & respect to the past</b> <br />
          to build a new cultural future to the arts and artforms.
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
          When not learning new & teaching I try to keep up with whats going on
          in the world.
        </h2>
      </section>

      <section className='home-section-bottom'>
        <div className='text-section'>
          <b>About me</b> <br />
          <h2>
            <br />
            My name is Robert, I´m a creative mind who loves dancing, I started
            as a young kid when the hiphop culture struck Europe and Sweden by
            lightningt. From the first time seeing it I was hooked. It was the
            music, the style, everything just felt so genuine. Since then Ive
            been dancing, teaching, choreographing, produced tv-show and
            events/festivals.
            <br /> <br />
            My journey to work as dancer started at Nine Degrees in Rinkeby
            where Gabriel Moraga set the foundation to how I work today. He also
            teaches salsa and you can find his studio and classes here...&nbsp;
            <Link
              to={{ pathname: 'https://dansasalsa.se/' }}
              target='_blank'
              style={{ color: '#BF953F' }}
            >
              Studio Salsa
            </Link>
            <br />
            <br />
            Currently Im teaching at DansCenter at Fryshuset. I also judge
            competions and battles when my services is needed. I also study
            programming/ development.
            <br />
            <br />
          </h2>
          <div className='inspirations'>
            <span>Here are Some of my insiprations to my dancing</span>
            <br />
            <br />
            <h4>My sister and brother (from when i was young</h4>
            <h4>Gabriel Moraga & all members of Nine Degrees</h4>
            <h4>Carlito & Jappe & Danne</h4>
            <h4>James Higgins aka Skeeter Rabbit</h4>
            <h4>Dave Gregory Pope aka Campbellock Jr</h4>
            <h4>Anthony Lewis aka Tony GoGo</h4>
            <h4>Brian Green</h4>
            <h4>Shannon Mabra aka Which Way Sha</h4>
            <h4></h4>
          </div>
          <br />
          <br />
          <h2>
            I keep on learning still in my older days, and then sharing what Ive
            learning with my students. I think having an open mind is what keeps
            me going and makes me feel young at heart. My purpose has always
            been to spread truthful information and knowledge about the dances i
            profess which come from Afro-american & Latin cultures. <br />
            <Link to='/about'>Read more about me...</Link>
          </h2>
        </div>
      </section>
    </motion.div>
  );
};

export default HomeDancer;
