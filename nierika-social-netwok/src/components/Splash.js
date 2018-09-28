//Splash view components
import React, { Component } from 'react';
import Brand from '../assets/logoWolf.gif';
import '../splash.css';
import '../index.css';

class Splash extends Component {
  render() {
    return (
      <div className="intro">
        <img src={Brand} className="wolf" alt="WolfLogo made by" />
        <h1 className="Brand">Vaniusha Co.</h1>
      </div>
    );
  }
}

export default Splash;

//FIXME:
//*-Agregar splash como estado de app.js y eliminar este componente
//TODO:
// - Revisar los estados y rutas en react
// - Limpiar las importaciones de este componente
