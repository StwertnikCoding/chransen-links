import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';



import Homepage from './pages/home';

library.add(fab);



export default class App extends Component {
  render() {
    return (
      <div className='container'>
      <Homepage />
        
      </div>
    );
  }
}
