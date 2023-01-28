import React, { Component } from 'react';
import profilePic from '../images/jennas.jpg';
import '../styles/home.css';

class Home extends Component {
  render() {
    return(
      <main className="home-main">
        <img className="jennas" src={ profilePic } alt="Jean smiling" />
        <div className="about-me">
          <h1>Hello World! I'm </h1>
          <a
            className="my-name"
            href="https://www.linkedin.com/in/jeanfipke/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="first-name" data-text="Glitch Effect">Jean</span> 
            Fipke
          </a>
          <h1 className="description">
            Web Development student at
            <a
              className="trybe"
              href="https://www.betrybe.com/"
              target="_blank"
              rel="noreferrer"
            >
            {' Trybe'}
            </a>
          </h1>
        </div>
      </main>
    );
  }
}

export default Home;
