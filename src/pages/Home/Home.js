import React from 'react'
import Logo from '../../components/logo/Logo';
import './home.scss'
import PortImg from '../../assets/img/rob1.png'
import ShapeOne from '../../components/design/shapes/ShapeOne';
import ShapeTwo from '../../components/design/shapes/ShapeTwo';



const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="headline-wrapper">
        <h4>Hello, my name is </h4>
       <h1>Robert Wägar</h1>
      </div>

      {/* <img src={PortImg} alt=""
        className="image" />
      <div className="shapes">
        <div>
        <ShapeOne />
        </div>
        <div>
        <ShapeTwo />
        </div>        
      </div> */}
     
      <section className="home-section-top">
        <h2>
          I´m a <b>DEVELOPER</b> with focus on<br />
          <b>Frontend, </b> <small> backenD</small> & <b>Design.</b><br />
          <br/><br/>
          I´m currently Based in Stockholm, Sweden <br /><br/>
          I´m open to help you if you are looking for <br />
          a developer or need help with building your<br />
          website or other web based applications
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
          By creating smart <br />
          <b>user interfaces & useful interactions</b> <br />
          we can develope rich <br />
          <b>web experience & web applications</b> <br /><br />
          When not learning new & playing around with <br/>
          <code>if(coding !== true)</code><br />
          I´m working as a <b>dance</b> teacher
        </h2>
      
      </section>
     
    </div>
   );
}
 
export default Home;