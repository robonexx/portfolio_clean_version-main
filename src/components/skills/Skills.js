import React from 'react';
import './Skills.scss';
import Gta1 from '../../assets/img/gta1.jpg';
import Gta2 from '../../assets/img/gta2.jpg';
import Gta3 from '../../assets/img/gta3.jpg';
import Gta4 from '../../assets/img/gta4.jpg';
import Gta5 from '../../assets/img/gta5.jpg';
import Gta6 from '../../assets/img/gta6.jpg';
import Js from '../../assets/img/js.png';
import Html from '../../assets/img/html.png';
import Css from '../../assets/img/css.png';
import ReactImg from '../../assets/img/react.png';
import Node from '../../assets/img/node.png';
import Github from '../../assets/img/github.png';

export default function Skills() {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta1} alt='' />
          </div>
          <div className='card-back'>
            <img src={Js} alt='' />
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta2} alt='' />
          </div>
          <div className='card-back'>
            <img src={Html} alt='' />
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta3} alt='' />
          </div>
          <div className='card-back'>
            <img src={Css} alt='' />
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta4} alt='' />
          </div>
          <div className='card-back'>
            <img src={ReactImg} alt='' />
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta5} alt='' />
          </div>
          <div className='card-back'>
            <img src={Node} alt='' />
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta6} alt='' />
          </div>
          <div className='card-back'>
            <img src={Github} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
