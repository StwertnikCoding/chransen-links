import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import GhostWobbleVipCover from '../images/ghost-wobble-cover';

export default class GhostWobbleVipButtonContainer extends Component {
  render() {
    return (
        <div className="new-release-btn-links-wrapper">
        
        <div className="cover-image-wrapper">
            <GhostWobbleVipCover />
        </div>


        <div className="new-release-heading">
            <h1>Halloween</h1>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
        <Link className="bigger-link" to={{ pathname: "https://soundcloud.com/chransen/ghostwobblevip-3/s-qNPZoliIKWV?si=db0e409258c44148b84850c3ec2c3adb"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                    </div>

                    His Chransen - Ghost Wobble (VIP) on Soundcloud
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://www.youtube.com/watch?v=v8I8zg4Lz1o" }} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                    </div>

                    His Chransen - Ghost Wobble (VIP) (Official Visuals)

                </button>
            </Link>
        </div>
        

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://open.spotify.com/album/2MeHWfJUs2BTZ2fup0EOE1"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'spotify']} />
                    </div>

                    His Chransen - Ghost Wobble (VIP) on Spotify

                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
        <Link className="bigger-link" to={{ pathname: "https://music.apple.com/us/album/ghost-wobble-vip-single/1593053184?uo=4&app=music&at=1001lry3&ct=dashboard" }} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'apple']} />
                    </div>

                    His Chransen - Ghost Wobble (VIP) on Apple Music

                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://www.amazon.com/gp/product/B09KSWLM15/?tag=distrokid06-20" }} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'amazon']} />
                    </div>

                    His Chransen - Ghost Wobble (VIP) on Amazon

                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://hypeddit.com/o7uxa5"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon='download' />
                    </div>
                    His Chransen - Ghost Wobble (VIP) [FREE DL]
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