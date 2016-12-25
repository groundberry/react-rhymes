import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const today = new Date();
    const year = today.getFullYear();

    return (
      <small className="Footer">
        © Blanca Mendizabal Perello {year}
      </small>
    );
  }
}

export default Footer;
