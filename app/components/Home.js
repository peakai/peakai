import React from 'react';
import {Link} from 'react-router';
import {footer} from '../styles/footer.scss';
import './Map.js';
import {typeformWrapper} from '../styles/main.scss';

const Home = () =>
    <main>

      <section className="services" id="services">

        <div className="row">
          <img className="logo-img" src={require('../images/logoblue.png')}/>

          <h1 className="mean_title">Take part in the challenge</h1>
          <h2 className="sub_title">Three Peaks – 29<sup>th</sup>-30<sup>th</sup> April 2017</h2>
          <br />
          <h1 className="mean_title">Our Mission</h1>
          <p>
            We believe technology and AI has the capability of solving the world's most pressing
            challenges,
            but a limiting factor is connecting the able and willing minds together.
            Networking sucks, but adversity and challenge brings people together to make lasting bonds
            and great memories.</p>

          <p>PeakStartup is on a mission to connect London’s AI and tech community through shared
            adventure. We support humans in need by raising money for international development through the Deworm The
            World Initiative. Conquering Britain’s Three Peaks in 24 hours is just the start.</p>

        </div>
      </section>

      <section className="services">
        <div className="row">

          <h3>Contact</h3>

          <p>Contact <a href="mailto:jordan@peakstartup.co">jordan@peakstartup.co</a> if
            you’re interested in finding out more or can think of some other way to help.</p>
        </div>
      </section>


      <section className="quote">
        <blockquote>
          <p>Life is either a great <span className="strong">Adventure</span> or nothing. </p>
          <hr/>
          <span className="author">Helen Keller</span>
        </blockquote>
      </section>

      <section className="cta">
        <div className="row">

          <h1 className="title">Join the adventure</h1>
          <h2 className="sub_title">Be part of something epic</h2>

          <iframe className="typeform-widget" src="https://jordan340.typeform.com/to/nbzkdS"></iframe>

        </div>
      </section>


      <section className="map" id="connect">

        <div className="shadow"></div>

        <div id="map_container"></div>
      </section>
    </main>
  ;


export default Home;
