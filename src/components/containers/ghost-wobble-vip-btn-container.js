import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import StimulantVipCover from '../images/stimulant-vip-cover';

export default class GhostWobbleVipButtonContainer extends Component {
  render() {
    return (
        <div className="new-release-btn-links-wrapper">
        
        <div className="cover-image-wrapper">
            <StimulantVipCover />
        </div>


        <div className="new-release-heading">
            <h1>Out Now!</h1>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://soundcloud.com/chransen/his-chransen-stimulant-vip-free-dl"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                    </div>

                    His Chransen - Stimulant (VIP) on Soundcloud
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://www.youtube.com/watch?v=yVeNB5qNncI&t=59s"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                    </div>

                    His Chransen - Stimulant (VIP) (Official Visuals)

                </button>
            </Link>
        </div>
        

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://open.spotify.com/track/2EzA85kmBxUhNU5l0BjczU?si=96794a16a98240e7"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'spotify']} />
                    </div>

                    His Chransen - Stimulant (VIP) on Spotify

                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://youtu.be/Pebqg1ULIcc"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'apple']} />
                    </div>

                    His Chransen - Stimulant (VIP) on Apple Music

                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://youtu.be/Pebqg1ULIcc"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'amazon']} />
                    </div>

                    His Chransen - Stimulant (VIP) on Amazon

                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://hypeddit.com/6qw8xe"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon='download' />
                    </div>
                    His Chransen - Stimulant (VIP) [FREE DL]
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