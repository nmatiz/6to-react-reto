import React, { Component } from 'react';
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
        {this.state.names.map((name) =>
          <h1>Welcome name={name} </h1>
        )}
      </div>
    );
  }
}

export default App;