import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const today = new Date();
    const year = today.getFullYear();

    return (
      <small className="Footer">
        © Groundberry {year}
      </small>
    );
  }
}

export default Footer;
