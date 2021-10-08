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
     
      <section className="home-section-top left">
        <h2>
          <b>Frontend developer</b><br />
          with <b>design</b> & <small> backend knowledge</small>.<br />
          Who loves <code>(code === true)</code> <br/>
          Based in Stockholm, Sweden <br />
          Since you are here you are probably looking for<br />
          for someone to help build your website or some<br />
          other product that needs development.
        </h2>
      </section>
  
      <section className="home-section-top right">
        <h2>
          I belive that <br/>
          <b>Creativity, design, art and technology</b><br />
          is the tools to solve future problems.<br />
           <br />
          By creating smart user interfaces and useful interactions, we can develope rich web experiences & web applications. <br /><br />
          When not learning new & playing around with code<br />
          I´m working as a <b>dance</b> teacher
          </h2>
      </section>
     
    </div>
   );
}
 
export default Home;