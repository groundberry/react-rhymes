import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const keys = Object.keys(props.rhymes);
    const index = Math.floor(Math.random() * keys.length);
    const currentKey = keys[index];

    this.state = {
      key: currentKey,
      values: Object.values(props.rhymes)
    }
  }

  render() {
    return (
      <div className="App">
        <p className="App-key">
          {this.state.key}
        </p>
        <ul className="App-values">
          {this.state.values.map((value) =>
            <li>{value}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
