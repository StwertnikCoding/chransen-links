import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import SpaceCreamAlbumCover from '../../images/space-cream-album-cover';

export default class SpaceCreamDownloadsButtonContainer extends Component {
  render() {
    return (
        <div className="new-release-btn-links-wrapper">
        
        <div className="cover-image-wrapper">
            <SpaceCreamAlbumCover />
        </div>


        <div className="new-release-heading">
            <h1>Out 12/1</h1>
        </div>
        
        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://hypeddit.com/fyy1sr" }} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon='download' />
                    </div>
                    His Chransen - Space Cream [FREE DL]
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://hypeddit.com/0c1r9g" }} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon='download' />
                    </div>
                    His Chransen - Absolute Quiet [FREE DL]
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://hypeddit.com/m30ir0" }} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon='download' />
                    </div>
                    His Chransen - Lost Connection [FREE DL]
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://hypeddit.com/hkg93f" }} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon='download' />
                    </div>
                    His Chransen - Strength Update [FREE DL]
                </button>
            </Link>
        </div>
       
        <div className='homepage-link-wrapper'>
            <Link className="go-back-link" to="/new-releases">
                Go Back
            </Link>
        </div>

        <div className='homepage-link-wrapper'>
            <Link className="homepage-link" to="/">
                Return to Homepage
            </Link>
        </div>
</div>
    );
  }
}