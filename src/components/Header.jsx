import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import home from '../images/home.svg';
import about from '../images/boy-two.svg';
import projects from '../images/web-page.svg';
import contact from '../images/mail.svg';
import '../styles/header.css';


class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="header-icon-div">
          <Link to="/" >
            <img
              className="header-icon"
              src={ home }
              alt="home logo"
              />
          </Link>
        </div>
        <div className="header-icon-div">
          <Link to="/about" >
            <img
            className="header-icon"
            src={ about }
            alt="about logo"
            />
          </Link>
        </div>
        <div className="header-icon-div">
          <Link to="/projects" >
            <img
              className="header-icon"
              src={ projects }
              alt="projects logo"
              />
          </Link>
        </div>
        <div className="header-icon-div">
          <Link to="/contact" >
            <img
              className="header-icon"
              src={ contact }
              alt="contact logo"
              />
        </Link>
          </div>
      </header>
    );
  }
};

export default Header;
