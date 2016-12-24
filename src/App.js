import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
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
        <Header />
        <p className="App-key">
          {this.state.key}
        </p>
        <ul className="App-values">
          {this.state.values.map((value) =>
            <li>{value}</li>
          )}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default App;
