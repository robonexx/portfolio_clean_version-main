import React from 'react'
import Logo from '../../components/logo/Logo';
import './home.scss'
import PortImg from '../../assets/img/rob1.png'
import ShapeOne from '../../components/design/shapes/ShapeOne';
import ShapeTwo from '../../components/design/shapes/ShapeTwo';



const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="logo-wrapper">
        <Logo /><h1>Wägar</h1>
      </div>

      <img src={PortImg} alt=""
        className="image" />
      <div className="shapes">
        <div>
        <ShapeOne />
        </div>
        <div>
        <ShapeTwo />
        </div>
        
        
      </div>
     
      <section className="home-section-top">
        <h2>
          <b>Web developer</b><br />
          <b>Frontend, Design</b> & <small> backenD</small>.<br />
          Who loves <code>(code === true)</code> <br/><br/>
          Based in Stockholm, Sweden <br /><br/>
          Since you are here you are probably looking for<br />
          for someone to help build your website or some<br />
          other product/ idea that needs to become reality.
        </h2>
      </section>
  
      <section className="home-section-mid">
        <h2>
          I belive that <br/>
          <b>Creativity, <br/>art, <br/>design, <br/> and technology</b><br />
          <i>in the hands of the right minds </i><br/>
          has the tools to solve future problems.<br />
           <br />
          </h2>
      </section>
      <section className="home-section-bottom" >
        <h2>
        By creating smart <b>user interfaces & useful interactions</b>, we can develope rich <b>web experiences & web applications</b>. <br /><br />
          When not learning new & playing around with <br/>
          <code>if(coding !== true)</code><br />
          I´m working as a <b>dance</b> teacher
        </h2>
      
      </section>
     
    </div>
   );
}
 
export default Home;