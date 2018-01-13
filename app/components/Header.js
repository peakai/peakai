import React from 'react';
import {Link} from 'react-router';

const Header = () =>
  <section className="hero">

    <header>
      <div className="row">

        <nav className="top-bar" data-topbar role="navigation">

          <ul className="title-area">
            <li className="name">

              <a href="/" className="logo">
                <h1>P<span className="smallCaps">eak</span>AI<span className="tld">.org</span></h1>
              </a>
            </li>
            <li>
              <span className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></span>
            </li>
          </ul>

          <section className="top-bar-section" id="mean_nav">
            <ul className="right">
              <li><a href="#mission">Mission</a></li>
              <li><a href="#challenge">The Challenge</a></li>
              <li><a href="#apply">Apply</a></li>
              <li><a href="https://medium.com/peakai">Blog</a></li>
              <li><a href="https://www.againstmalaria.com/peakai">Donate</a></li>
            </ul>
          </section>

        </nav>
      </div>
    </header>

    <section className="lead">
      <div className="row">
        <h1 className="mean_cap">AI TAKES ON THE THREE PEAKS</h1>
        <h2 className="sub_cap">29<sup>th</sup>-30<sup>th</sup> April 2017</h2>
        <a href="#mission" className="btn_details"><span>More Details</span>
          <img src={require('../dist/img/btn_arrow.png')} className="arrow"/></a>
      </div>
    </section>

    <div className="caption"><span>View from Mt Snowdon.</span><span className="credit">credit: WalkUpSnowdon.co.uk</span>
    </div>
  </section>;

export {Header};
