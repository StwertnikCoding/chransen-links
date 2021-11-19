import React, { Component } from 'react';


export default class SpaceCreamAlbumCover extends Component {    
  render() {
    return (
        <div className="cover-wrapper">
            <img className="cover" src={require('../images/covers/space-cream-album-cover.png')}></img>
        </div>
    );
  }
}