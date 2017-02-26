import React from 'react';
import {Link} from 'react-router';

import {footer} from '../styles/footer.scss';


const Home = () =>
    <main>

      <section className="services" id="services">

        <div className="row">
          <img className="logo-img" src={require('../images/logoblue.png')}/>

          <h1 className="mean_title">Take part in the challenge</h1>
          <h2 className="sub_title">29<sup>th</sup>-30<sup>th</sup> April 2017</h2>
        </div>

        <div className="row services_list">
          <div className="small-12 medium-3 large-3 columns">
            <img src={require('../dist/img/icon2.png')} alt="" title="" className="serv_icon"/>
            <h2 className="title">Plan & Strategy</h2>
            <p>Ruis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.</p>
          </div>

          <div className="small-12 medium-3 large-3 columns">
            <img src={require('../dist/img/icon1.png')} alt="" title="" className="serv_icon"/>
            <h2 className="title">UI/UX Design</h2>
            <p>Ruis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.</p>
          </div>

          <div className="small-12 medium-3 large-3 columns">
            <img src={require('../dist/img/icon3.png')} alt="" title="" className="serv_icon"/>
            <h2 className="title">Test The App</h2>
            <p>Ruis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.</p>
          </div>

          <div className="small-12 medium-3 large-3 columns">
            <img src={require('../dist/img/icon4.png')} alt="" title="" className="serv_icon"/>
            <h2 className="title">Launch The App</h2>
            <p>Ruis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.</p>
          </div>
        </div>

        <div className="btn_holder">
          <a href="#" className="btn_fancy">
            <div className="solid_layer"></div>
            <div className="border_layer"></div>
            <div className="text_layer">Get In Touch</div>
          </a>
        </div>

      </section>

      <section>
        <div className="row">
          <p><strong>On 29th April 2017, 24 of London’s most interesting AI researchers,
            technology entrepreneurs and venture capitalists take on one of the touchest
            challenges in world British Isles: climbing the three tallest national peaks in
            just
            24 hours, in support of Deworm The World Initiaitive.</strong></p>

          <h3>Our Mission</h3>

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

      <section className="quote">
        <blockquote>
          <p>Mauris semper <span className="strong">lacus nunc</span> ultrices imperdiet. </p>
          <hr/>
          <span className="author">john doe</span>
        </blockquote>
      </section>


      <section className="testimonials" id="testimonials">
        <div className="row">
          <div className="slider_container">
            <div id="carousel">

              <div className="tesimonial">
                <img src={require('../dist/img/mashable.jpg')} title="" alt=""/>
                <span className="name">Mashable</span>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.</p>
                <span className="author">Alex Martin - CEO</span>
              </div>

              <div className="tesimonial">
                <img src={require('../dist/img/mashable.jpg')} title="" alt=""/>
                <span className="name">Mashable_2</span>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.</p>
                <span className="author">Alex Martin - CEO</span>
              </div>

              <div className="tesimonial">
                <img src={require('../dist/img/mashable.jpg')} title="" alt=""/>
                <span className="name">Mashable_3</span>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.</p>
                <span className="author">Alex Martin - CEO</span>
              </div>

            </div>
          </div>

          <nav className="pagination">
            <ul>
              <li><a href="#">1</a></li>
              <li><a href="#" className="selected">2</a></li>
              <li><a href="#">3</a></li>
            </ul>
          </nav>

        </div>
      </section>


      <section className="cta" id="Download">
        <div className="row">

          <h1 className="title">Volcano Free Responsive Zurb Foundation Template.</h1>
          <h2 className="sub_title">Crafted With Care & attention to details by peakstartup.co</h2>

          <a href="#" className="btn_fancy">
            <div className="solid_layer"></div>
            <div className="border_layer"></div>
            <div className="text_layer">Get It Now!</div>
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
