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
    const secondHalves = Object.values(props.rhymes);

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    this.state = {
      firstHalf: firstHalf,
      secondHalves: shuffleArray(secondHalves),
      selection: null,
      correct: false
    };

    this.checkSentence = this.checkSentence.bind(this);
  }

  render() {
    const state = this.state;

    return (
      <div className="App">
        <Header />
        <FirstHalf
          value={state.firstHalf}
        />
        <SecondHalves
          values={state.secondHalves}
          selection={state.selection}
          correct={state.correct}
          onClick={this.checkSentence}
        />
        <Footer />
      </div>
    );
  }

  checkSentence(value, evt) {
    evt.preventDefault();

    this.setState({
      selection: value,
      correct: value === this.props.rhymes[this.state.firstHalf]
    });
  }
}

export default App;
