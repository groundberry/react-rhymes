import React, { Component } from 'react';

class SecondHalves extends Component {
  render() {
    return (
      <ul className="SecondHalves">
        {this.props.values.map((value) =>
          <li key={value}>
            {value}
          </li>
        )}
      </ul>
    );
  }
}

export default SecondHalves;
