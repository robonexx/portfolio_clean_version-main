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
          I´m a <b>developer</b> with focus on 
          <b> frontend / </b> <small> backend</small> & <b>design</b><br />
          <br/><br/>
          I´m currently Based in Stockholm, Sweden <br /><br/>
          I´m a freelancer here to help you if you are looking for a developer or need help with building your website or other web based applications
        </h2>
      </section>
  
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