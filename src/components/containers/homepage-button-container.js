import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ChransenLogo from '../images/chransen-logo';
import IconContainer from './icon-container';

export default class HomepageButtonContainer extends Component {
  render() {
    return (
        <div className="new-release-btn-links-wrapper">
        
        <div className="cover-image-wrapper">
            <ChransenLogo />
        </div>


        <div className="new-release-heading">
            <h1>Check Out All My Links!</h1>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://soundcloud.com/chransen"}} target="_blank">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                    </div>

                    Soundcloud
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://open.spotify.com/artist/6VVQxpU220vD1zUgpxaABV"}} target="_blank">
                <button className="new-release-btn-link">

                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'spotify']} />
                    </div>

                    Spotify
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://www.youtube.com/channel/UC3qtq7c7WN4hVHIg4V-oXgA"}} target="_blank">
                <button className="new-release-btn-link">

                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                    </div>

                    Youtube
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://music.amazon.com/artists/B085DFWDT8/his-chransen"}} target="_blank">
                <button className="new-release-btn-link">

                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'amazon']} />
                    </div>

                    Amazon
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://music.apple.com/us/artist/his-chransen/1501274074"}} target="_blank">
                <button className="new-release-btn-link">

                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'apple']} />
                    </div>

                    Apple Music
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to={{ pathname: "https://tidal.com/browse/artist/18425683"}} target="_blank">
                <button className="new-release-btn-link">

                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'tidal']} />
                    </div>

                    Tidal
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to="/new-releases">
                <button className="new-release-btn-link">
                    Check Out My Recent Releases
                </button>
            </Link>
        </div>
        <IconContainer />
</div>
    );
  }
}