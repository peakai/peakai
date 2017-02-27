import React from 'react';
import {Link} from 'react-router';
import {footer} from '../styles/footer.scss';
import './Map.js';
import {typeformWrapper} from '../styles/main.scss';

const Home = () =>
    <main>

      <section className="services" id="mission">

        <div className="row">
          <h1 className="mean_title">Our Mission</h1>
          <p> We believe technology and AI has the capability of solving the world's most pressing
            challenges, but only if the the right people come together. Networking sucks, but
            taking on a shared challenge brings people together to make lasting bonds and great
            memories.</p>

          <p>PeakStartup is on a mission to connect London’s AI and tech community through shared
            adventure. We support humans in need by raising money for international development
            through Against Malaria Foundation and Effective Altruism Charities. Our first
            challenge is to conquer Britain’s Three Peaks in 24 hours, takes place in Spring 2017.</p>

          <a href="#apply" className="btn_fancy">
            <div className="solid_layer"></div>
            <div className="border_layer"></div>
            <div className="text_layer">Apply to take part</div>
          </a>
        </div>
      </section>

      <section className="services" id="mission">
        <div className="row">
          <img className="logo-img" src={require('../images/logoblue.png')}/>
          <h1 className="mean_title">Take part in the challenge</h1>
          <h2 className="sub_title">Three Peaks – 29<sup>th</sup>-30<sup>th</sup> April 2017</h2>
          <p>The Three Peaks Challenge involves climbing the three highest peaks in England, Wales
            and Scotland, within 24 hours.</p>
          <p>Apply to take part, alongside 25 of London's most ambitious tech entrepreneurs, AI
            researchers and VC investors.</p>
        </div>
      </section>

      <section className="cta" id="apply">
        <div className="row">

          <h1 className="title">Join the adventure</h1>
          <h2 className="sub_title">Accomplish something epic, make lifelong friends</h2>

          <iframe className="typeform-widget" src="https://jordan340.typeform.com/to/nbzkdS"></iframe>

        </div>
      </section>

      <section className="quote">
        <blockquote>
          <p>Life is either a great <span className="strong">Adventure</span> or nothing. </p>
          <hr/>
          <span className="author">Helen Keller</span>
        </blockquote>
      </section>

      <section className="services" id="services">

        <div className="row">

          <h1 className="mean_title">Contact</h1>
          <p>Contact <a href="mailto:jordan@peakstartup.co">jordan@peakstartup.co</a> if
            you’re interested in finding out more or with any ideas to help.</p>
        </div>
      </section>

      <section className="map" id="connect">

        <div className="shadow"></div>

        <div id="map_container"></div>
      </section>
    </main>
  ;


export default Home;
