import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import TheVisitCover from '../images/the-visit-cover';

export default class TheVisitButtonContainer extends Component {
  render() {
    return (
        <div className="new-release-btn-links-wrapper">
        
        <div className="cover-image-wrapper">
            <TheVisitCover />
        </div>


        <div className="new-release-heading">
            <h1>Out Now</h1>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="visit-bigger-link" to={{ pathname: "https://soundcloud.com/chransen/spaceghost-x-brikz-x-mammoth-the-visit-spaceghost-vip-his-chransen-remix-free-dl"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                    </div>

                    SpaceGhost x Brikz x Mammoth (SpaceGhost VIP) (His Chransen Remix) on Soundcloud
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="visit-bigger-link" to={{ pathname: "https://youtu.be/Pebqg1ULIcc"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                    </div>

                    SpaceGhost x Brikz x Mammoth - The Visit (SpaceGhost VIP) (His Chransen Remix) (Official Visuals)

                </button>
            </Link>
        </div>
        <div className='new-release-btn-link-wrapper'>
            
            <Link className="visit-bigger-link" to={{ pathname: "https://hypeddit.com/track/g5wn4x"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon='download' />
                    </div>

                    SpaceGhost x Brikz x Mammoth (SpaceGhost VIP) (His Chransen Remix) [FREE DL]
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