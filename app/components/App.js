import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Header} from './Header.js';

import {footer} from '../styles/footer.scss';

import '../dist/css/normalize.css';
import '../dist/css/foundation.min.css';
import '../dist/css/main.css';



const App = ({children}) =>
    <main>
      <Header />

      { children }


      <footer>
        <div className="row">

          <div className="small-12 medium-4 large-4 columns">
            <div className="copyrights">
              <a className="logo" href="#">
                <h1>peakstartup<span className="tld">.co</span></h1>
              </a>
              <p>Copyright © 2017 Peak Startup.</p>
              <p><Link to="/" activeClassName="active">Home</Link></p>

              <p><Link to="/about" activeClassName="active">About</Link></p>

            </div>
          </div>

          <div className="small-12 medium-8 large-8 columns">
            <div className="contact_details right">
              <nav className="social">
                <ul className="no-bullet">
                  <li><a href="http://twitter.com/peak_startup" target="_blank">Twitter</a></li>
                  <li><a href="http://facebook.com/peak_startup" target="_blank">Facebook</a></li>
                  <li><a href="http://instagram.com/peak_startup" target="_blank">Instagram</a></li>
                </ul>
              </nav>

              <div className="contact">
                <div className="details">
                  <p>jordan@peakstartup.co</p>
                </div>

                <p className="address">
                  London, UK</p>
              </div>
            </div>
          </div>

        </div>
      </footer>

      <a href="#" className="btn_fancy" id="back_top">
        <div className="solid_layer"></div>
        <div className="border_layer"></div>
        <div className="text_layer">
          <img src={require('../dist/img/top_arrow.png')} alt="Back to top" title=""
               className="top_arrow"/>
        </div>
      </a>

    </main>
  ;


App.propTypes = {
  children: PropTypes.object
};

export default App;
