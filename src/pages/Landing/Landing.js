import React, { useState } from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
/* import ImgDance from '../../assets/robertwagar.jpg';
import ImgDev from '../../assets/code.jpg'; */

/* 
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
 */

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
    <div className='landing'>
      <div
        className={`container ${conLeft ? 'hover-left' : null} ${
          conRight ? 'hover-right' : null
        }`}
      >
        <div
          className='split left'
          onMouseEnter={handleLeftMouseEnter}
          onMouseLeave={handleLeftMouseLeave}
        >
          {/* <img src={ImgDev} alt='' /> */}
          <h1>Developer</h1>
          <Link to='home' className='btn'>
            Enter
          </Link>
        </div>
        <div
          className='split right'
          onMouseEnter={handleRightMouseEnter}
          onMouseLeave={handleRightMouseLeave}
        >
          {/* <img src={ImgDance} alt='' /> */}
          <h1>Dancer</h1>
          <Link to='home' className='btn'>
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
