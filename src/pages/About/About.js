import React from 'react';
import './about.scss';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className='about'
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      transition={{ duration: 0.6 }}
    >
          <h1>ABout</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius porro aliquid architecto illo incidunt similique molestias illum mollitia facilis, rerum ratione doloremque atque, aspernatur minus fugiat laborum quas corrupti hic non quaerat dolorem natus. Maiores suscipit laudantium fugiat ad maxime delectus, quos unde at iure rem, cumque odio voluptate.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam laudantium nostrum delectus repudiandae et cupiditate iusto enim possimus? Eligendi pariatur eveniet maiores dolor deleniti qui cum laborum eaque quis nemo ea quos in, vitae, repellat quia. Hic ipsum cupiditate, molestias aliquid ipsam dolores. Ipsam expedita recusandae quae non. Voluptate eos ut aperiam hic, nam impedit amet! Sunt, doloremque. Tempora quaerat veritatis quod asperiores at! Veritatis ex quidem fugit quae rem mollitia dolorem vitae non, ut magnam quaerat debitis, sed quasi voluptates distinctio, veniam fuga ab optio consequatur laboriosam praesentium neque illo commodi repellendus. Molestiae, blanditiis dolorum? Corporis, libero rerum?</p>
    </motion.div>
  );
};

export default About;
