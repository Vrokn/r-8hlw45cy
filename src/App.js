import React, { Component } from 'react';
import './App.css';
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

class App extends Component {
  state = {
    texto: '',
  };
  mostrar = (e) => {
    this.setState({
      texto: e.target.value.checked ? lorem : '',
    });
  };
  render() {
    return (
      <div className="wrapper">
        <label><input type="checkbox" onChange={this.mostrar} /> Mostrar información importante</label>
        <p>{this.state.texto}</p>
      </div>
    );
  }
}

export default App;
