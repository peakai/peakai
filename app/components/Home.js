import React from 'react';
import {Link} from 'react-router';
import {footer} from '../styles/footer.scss';
import './Map.js';

const Home = () =>
    <main>

      <section className="services">
        <div className="row">
          <h1 className="mean_title">Our Mission</h1>
          <p>PeakStartup is on a mission to connect London’s tech community through adventure
            and adversity. Through better networks of some of Europe’s most ambitious people
            we can solve some of the world’s most pressing challenges. We do so whilst helping
            humans in need by supoprt international development through the Deworm The World
            Initiaitive and other Effective Altruism charities. Conquering Britain’s Three
            Peaks in a day and is just the start.</p>

          <h3>Contact</h3>

          <p>Contact <a href="mailto:jordan@peakstartup.co">jordan@peakstartup.co</a> if
            you’re interested in finding out more or can think of some other way to help.</p>
        </div>
      </section>

      <section className="services" id="services">

        <div className="row">
          <img className="logo-img" src={require('../images/logoblue.png')}/>

          <h1 className="mean_title">Take part in the challenge</h1>
          <h2 className="sub_title">29<sup>th</sup>-30<sup>th</sup> April 2017</h2>
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

          <a href="#" className="btn_fancy">
            <div className="solid_layer"></div>
            <div className="border_layer"></div>
            <div className="text_layer">Register!</div>
          </a>

        </div>
      </section>


      <section className="map" id="connect">

        <div className="shadow"></div>

        <div id="map_container"></div>
      </section>
    </main>
  ;

export default Home;
