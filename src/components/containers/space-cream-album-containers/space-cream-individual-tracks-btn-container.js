import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import SpaceCreamAlbumCover from '../../images/space-cream-album-cover';

export default class SpaceCreamIndividualTracksButtonContainer extends Component {
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
            
        <Link className="bigger-link" to="/space-cream-soundcloud">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                    </div>

                    His Chransen - Space Cream EP on Soundcloud
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to="/space-cream-youtube">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                    </div>

                    His Chransen - Space Cream EP (Youtube Trailer)

                </button>
            </Link>
        </div>
        

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to="/space-cream-spotify">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'spotify']} />
                    </div>

                    His Chransen - Space Cream EP on Spotify

                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
        <Link className="bigger-link" to="/space-cream-apple">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'apple']} />
                    </div>

                    His Chransen - Space Cream EP on Apple Music

                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to="/space-cream-amazon">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'amazon']} />
                    </div>

                    His Chransen - Space Cream EP on Amazon

                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to="/space-cream-downloads" target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon='download' />
                    </div>
                    His Chransen - Space Cream EP [FREE DLS]
                </button>
            </Link>
        </div>
       
        <div className='homepage-link-wrapper'>
            <Link className="go-back-link" to="/space-cream-ep">
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