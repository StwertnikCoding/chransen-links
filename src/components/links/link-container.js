import React, { Component } from 'react';

import BtnLinks from './buttons-links';

export default class LinkContainer extends Component {
  render() {
    return (
      <div>
        <h1>Check out my music here:</h1>

        <BtnLinks />
      </div>
    );
  }
}