import React from 'react';
import {Link} from 'react-router';

const Header = () =>
  <section className="hero">

    <header>
      <div className="row">

        <nav className="top-bar" data-topbar role="navigation">

          <ul className="title-area">
            <li className="name">

              <a href="#" className="logo">
                <h1>
                  PeakStartup<span className="tld">.co</span></h1>
              </a>
            </li>
            <li>
              <span className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></span>
            </li>
          </ul>

          <section className="top-bar-section" id="mean_nav">
            <ul className="right">
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li><Link to="/about" activeClassName="active">About</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="https://medium.com/peakstartup">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </section>

        </nav>
      </div>
    </header>

    <section className="caption">
      <div className="row">
        <h1 className="mean_cap">Put down your laptop</h1>
        <h2 className="sub_cap">Less Is More.</h2>
        <a href="#" className="btn_details"><span>More Details</span>
          <img src={require('../dist/img/btn_arrow.png')} className="arrow"/></a>
      </div>
    </section>

  </section>;

export {Header};