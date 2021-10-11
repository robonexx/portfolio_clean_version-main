import React from 'react'
import './home.scss'
import {motion} from 'framer-motion'



const Home = () => {


  return (
    <div className="home-wrapper">
      <div className="headline-wrapper">
        <motion.h4
          initial={{x: -200, opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          transition={{delay: 0.4, duration: 0.3}}
        >Hello, my name is </motion.h4>
        <motion.h1
          initial={{x: -400, opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          transition={{delay: 0.3, duration: 0.3}}
        >Robert Wägar</motion.h1>
      </div>
     
      <motion.section className="home-section-top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      transition={{delay: 1, duration: 2}}>
        <h2>
          I´m a <b>developer</b> with focus on 
          <b> frontend / </b> <small> backend</small> & <b>design</b><br />
          <br/><br/>
          I´m currently Based in Stockholm, Sweden <br /><br/>
          I´m a freelancer here to help you if you are looking for a developer or need help with building your website or other web based applications
        </h2>
      </motion.section>
  
      <section className="home-section-mid">
        <h2>
          I belive that <br/>
          <b>Creativity, art, design, and technology</b><br />
          <i>in the hands of the right minds has the tools to solve our future problems.</i>
           <br />
          </h2>
      </section>
      <section className="home-section-bottom" >
        <h2>
          By creating smart <br />
          <b>user interfaces & useful interactions</b> <br />
          we can develope rich <br />
          <b>web experience & web applications</b> <br /><br />
          When not learning new & playing around with code<br/>
          I´m working as a <b>dance</b> teacher & workshop / event producer 
        </h2>
      
      </section>
     
    </div>
   );
}
 
export default Home;