import React, { Component } from 'react';
import './SecondHalves.css';

class SecondHalves extends Component {
  render() {
    const {values, selection, correct, onClick} = this.props;

    const getClassName = (value) => {
      if (selection === value && correct) {
        return 'correct';
      }
      if (selection === value && !correct) {
        return 'incorrect';
      }
      return '';
    }

    return (
      <ul className="SecondHalves">
        {values.map((value) =>
          <li key={value}>
            <a
              href="#"
              className={getClassName(value)}
              onClick={onClick.bind(null, value)}
            >
              {value}
            </a>
          </li>
        )}
      </ul>
    );
  }
}

export default SecondHalves;
