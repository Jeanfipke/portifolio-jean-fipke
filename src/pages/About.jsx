import React, { Component } from 'react';
import '../styles/about.css';

class About extends Component {
  render() {
    return(
      <main className="main-about">
        <p className="about-text">
          Hello World!
          Sou
          <a
            href="https://www.linkedin.com/in/jeanfipke/"
            target="_blank"
            rel="noreferrer"
            > Jean
          </a>, apenas um cara curioso que sonha em criar coisas novas. 
          Sou aqui de
          <a
            href="https://pt.wikipedia.org/wiki/Rio_Negrinho"
            target="_blank"
            rel="noreferrer"
            > Rio negrinho
          </a>, trabalhei por um tempo como professor de Inglês, até que decidi retomar um sonho de muito tempo atrás, e embarcar no mundo da programação.
        </p>
        <div className="abilities-div">        
          <h2 className="abiblities-title">Habilidades</h2>
          <hr className="line" />
          <div className="abilities">
              <div className="ability-card">
                <ion-icon name="logo-react"/>
                <h3>React</h3>
              </div>
              <div className="ability-card">
              <ion-icon name="logo-javascript" />
                <h3>JavaScript</h3>
              </div>
              <div className="ability-card">
              <ion-icon name="logo-html5" />
                <h3>HTML</h3>
              </div>
              <div className="ability-card">
              <ion-icon name="logo-css3" />
                <h3>CSS</h3>
              </div>
          </div>
          <hr className="line" />
        </div>
      </main>
    );
  }
}

export default About;
