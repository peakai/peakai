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
          <h2 className="sub_title">To connect London's AI and tech community for the good of
            humanity.</h2>
          <p>We believe technology and artificial intelligence (AI) has the capability of solving the world's most pressing
            challenges – but only if the the right people come together. Networking sucks, but
            taking on a shared challenge brings people together to make lasting bonds and great
            memories.</p>

          <p>PeakAI is on a mission to connect London’s AI and tech community through shared
            adventure. We support humans in need by raising money for international development
            through Against Malaria Foundation. Our first challenge is to conquer Britain’s Three
            Peaks in 24 hours and it takes place in Spring
            2017.</p>

          {/*<p>About the charity:*/}
          {/*<img src={require('../images/amf_logo.png')} alt="Against Malaria Foundation logo"/>*/}
          {/*Against Malaria Foundation provides long-life bed nets for developing countries.*/}
          {/*Continuously picked as Give Well (the ranking by Effective Altruism) as the top Charity in*/}
          {/*the years 2012, 2013, 2015, 2016 for being one of the most effective charities. Despite*/}
          {/*the attention, they are still in a funding deficit due to expansion to previously unserved*/}
          {/*countries. For each £2,850 donated, AMF probabilistically saves one human life.*/}
          {/*</p>*/}

          <a href="#apply" className="btn_fancy bottom">
            <div className="solid_layer"></div>
            <div className="border_layer"></div>
            <div className="text_layer">Apply to take part</div>
          </a>
        </div>
      </section>

      <section className="services" id="challenge">
        <div className="row">
          <img className="logo-img" src={require('../images/peakai_blue.png')}/>
          <h1 className="mean_title">Take part in the challenge</h1>
          <h2 className="sub_title">29<sup>th</sup>-30<sup>th</sup> April 2017 <br/>Three Peaks
            Challenge</h2>
          <p>The Three Peaks Challenge involves climbing* the three highest peaks in England, Wales
            and Scotland, within 24 hours. PeakAI aims to accomplish this challenge with twenty four
            of
            London's most ambitious tech entrepreneurs, AI researcher and VC investors.</p>

          <p>You'll need to a reasonable level of fitness to take part, but preparation (and social)
            events will take place beforehand.
            Transportation, awesome tee shirts and a celebratory after party will be provided to the
            legends that take part.
          </p>

          <p>We do this to raise money for Against Malaria Foundation – one of the top-rated
            charities by Give Well. Due to an expansion to
            previously unserved countries they have a donation shortfall, and all the money raised has
            high leverage on lives saved. Statistically for each £2950 we raise, a human life is saved.
            How awesome is that?</p>

          <p className="footnote"><sup>*</sup>It's more like a fast-paced walk.</p>
        </div>
      </section>


      <section className="map" id="map">
        <div id="map_container"></div>
      </section>

      <section className="cta" id="apply">
        <div className="row">

          <h1 className="title">Join the adventure</h1>
          <h2 className="sub_title">Join the challenge and accomplish something awesome</h2>

          <iframe className="typeform-widget" src="https://jordan340.typeform.com/to/nbzkdS"></iframe>

        </div>
      </section>


      <section className="services" id="contact">

        <div className="row">

          <h1 className="sub_title">Not ready to sign up?</h1>
          <p className="centered">Subscribe below to keep updated on any planned events you may want
            to join</p>

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

          <p className="bottom">If you have any suggestions, or wish to sponsor the
            event,<br/> contact Jordan at <a
              href="mailto:team@peakai.org">
              team@peakai.org</a>
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
