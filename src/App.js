import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import FirstHalf from './FirstHalf';
import SecondHalves from './SecondHalves';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const keys = Object.keys(props.rhymes);
    const index = Math.floor(Math.random() * keys.length);
    const firstHalf = keys[index];

    this.state = {
      firstHalf: firstHalf,
      secondHalves: Object.values(props.rhymes)
    }
  }

  render() {
    const state = this.state;

    return (
      <div className="App">
        <Header />
        <FirstHalf value={state.firstHalf}/>
        <SecondHalves values={state.secondHalves}/>
        <Footer />
      </div>
    );
  }
}

export default App;
