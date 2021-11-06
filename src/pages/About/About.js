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
        className='model'
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius
          porro aliquid architecto illo incidunt similique molestias illum
          mollitia facilis, rerum ratione doloremque atque, aspernatur minus
          fugiat laborum quas corrupti hic non quaerat dolorem natus. Maiores
          suscipit laudantium fugiat ad maxime delectus, quos unde at iure rem,
          cumque odio voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam
          laudantium nostrum delectus repudiandae et cupiditate iusto enim
          possimus? Eligendi pariatur eveniet maiores dolor deleniti qui cum
          laborum eaque quis nemo ea quos in, vitae, repellat quia. Hic ipsum
          cupiditate, molestias aliquid ipsam dolores. Ipsam expedita recusandae
          quae non. Voluptate eos ut aperiam hic, nam impedit amet! Sunt,
          doloremque. Tempora quaerat veritatis quod asperiores at! Veritatis ex
          quidem fugit quae rem mollitia dolorem vitae non, ut magnam quaerat
          debitis, sed quasi voluptates distinctio, veniam fuga ab optio
          consequatur laboriosam praesentium neque illo commodi repellendus.
          Molestiae, blanditiis dolorum? Corporis, libero rerum?
        </p>
      </motion.div>
      {/*  <motion.ul>
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
