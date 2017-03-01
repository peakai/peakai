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
          <h2 className="sub_title">To connect London's AI and tech community</h2>
          <p>We believe technology and AI has the capability of solving the world's most pressing
            challenges – but only if the the right people come together. Networking sucks, but
            taking on a shared challenge brings people together to make lasting bonds and great
            memories.</p>

          <p>PeakStartup is on a mission to connect London’s AI and tech community through shared
            adventure. We support humans in need by raising money for international development
            through Against Malaria Foundation and Effective Altruism Charities. Our first
            challenge is to conquer Britain’s Three Peaks in 24 hours and it takes place in Spring
            2017.</p>

          <a href="#apply" className="btn_fancy bottom">
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
          <h2 className="sub_title">Three Peaks — 29<sup>th</sup>-30<sup>th</sup> April 2017</h2>
          <p>The Three Peaks Challenge involves climbing the three highest peaks in England, Wales
            and Scotland, within 24 hours.</p>
          <p>Apply to take part, alongside 25 of London's most ambitious tech entrepreneurs, AI
            researchers and VC investors.</p>
        </div>
      </section>


      <section className="map" id="connect">
        <div id="map_container"></div>
      </section>

      <section className="cta" id="apply">
        <div className="row">

          <h1 className="title">Join the adventure</h1>
          <h2 className="sub_title">Apply to join the challenge and accomplish something awesome.</h2>

          <iframe className="typeform-widget" src="https://jordan340.typeform.com/to/nbzkdS"></iframe>

        </div>
      </section>


      <section className="services" id="services">

        <div className="row">

          <h1 className="mean_title">Not ready to sign up?</h1>
          <h2 className="sub_title">Subscribe below to keep updated on any planned events you may want
            to join</h2>

          <div id="mc_embed_signup">
            <form
              action="//jordanburgess.us6.list-manage.com/subscribe/post?u=9abb57a4ed&amp;id=11980c409a"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
              className="validate" target="_blank" noValidate={true}>
              <div id="mc_embed_signup_scroll">

                <input type="email" name="EMAIL" className="email" id="mce-EMAIL"
                       placeholder="email address" required={true}/>
                <div style={{position: 'absolute', left: -5000 + 'px'}} aria-hidden="true">
                  <input type="text" name="b_9abb57a4ed_11980c409a" tabIndex={-1} value=""/>
                </div>
                <div className="clear">
                  <input type="submit" value="Subscribe" name="subscribe"
                         id="mc-embedded-subscribe" className="button"/>
                </div>
              </div>
            </form>
          </div>

          <p className="bottom">If you have any ideas to help, contact Jordan at <a href="mailto:team@peakstartup.co">
            team@peakstartup.co</a>
          </p>
        </div>
      </section>


      <section className="penultimate quote">
        <div className="shadow"></div>

        <blockquote>
          <p>Life is either a great <span className="strong">Adventure</span> or nothing. </p>
          <hr/>
          <span className="author">Helen Keller</span>
        </blockquote>
      </section>

    </main>
  ;


export default Home;
