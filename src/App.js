import React, { Component } from 'react';
//se importan componentes desde otros arcrhivos
import Welcome from './Welcome.js'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      names: ["Juan", "Pedro", "Germán"]
    }
  }

  render() {
    return (
      <div>
        {/**Desde aqui se llama a names y se recorre con el map, y el indice es name */}
        {this.state.names.map((name2) =>
        /*Se importa la funcion 'welcome' */
          <Welcome key = {name2} namex = {name2}/>
        )}
      </div>
    );
  }
}

export default App;