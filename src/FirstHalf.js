import React, { Component } from 'react';

class FirstHalf extends Component {
  render() {
    return (
      <p className="FirstHalf">
        {this.props.value}
      </p>
    );
  }
}

export default FirstHalf;
