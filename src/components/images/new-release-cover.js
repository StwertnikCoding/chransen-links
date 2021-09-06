import React, { Component } from 'react';
import { useLocation } from 'react-router';

export default class NewReleaseCover extends Component {
    
    constructor() {
        super();

        this.state = {
            coverImage: [],
            locationPath: []
        };


        this.handleCoverImageChange = this.handleCoverImageChange.bind(this);
    }   

 

    handleCoverImageChange() {
        const newLocation = location.split("/")[1];
    }
    
  render() {
    return (
        <div className={`cover-wrapper__${location}`}>
            <img className="cover" src={this.state.coverImage}></img>
        </div>
    );
  }
}