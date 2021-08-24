import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import NewReleaseCover from '../images/new-release-cover';

export default class LinkContainer extends Component {
  render() {
    return (
      <div>
        <div className="new-release-btn-links-wrapper">

            <div className="cover-image-wrapper">
                <NewReleaseCover />
            </div>

            <div className="new-release-heading">
                <h3>8/25/21</h3>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <a className="bigger-link" href='https://www.chransenlinks.xyz/nuh-uh'>
                    <button className="new-release-btn-link">
                        <div className="new-release-social-icon"> 
                            <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                        </div>
                        
                        His Chransen - The Order on Soundcloud
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                <a className="bigger-link" href='https://www.chransenlinks.xyz/nuh-uh'>
                    <button className="new-release-btn-link">
                        <div className="new-release-social-icon"> 
                            <FontAwesomeIcon icon={['fab', 'spotify']} />
                        </div>

                        His Chransen - The Order on Spotify
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                <a className="bigger-link" href='https://www.chransenlinks.xyz/nuh-uh'>

                    <button className="new-release-btn-link">
                        <div className="new-release-social-icon"> 
                            <FontAwesomeIcon icon={['fab', 'itunes-note']} />
                        </div>

                        His Chransen - The Order on Apple Music
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                <a className="bigger-link" href='https://www.chransenlinks.xyz/nuh-uh'>
                    <button className="new-release-btn-link">
                        <div className="new-release-social-icon"> 
                            <FontAwesomeIcon icon={['fab', 'amazon']} />
                        </div>

                        His Chransen - The Order on Amazon
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <a className="smaller-link" href='https://youtu.be/jomxrVnsaXY'>
                    <button className="smaller-new-release-btn-link">
                        <div className="smaller-icon">
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                        </div>
                        His Chransen - The Order (Youtube Premiere)
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                <a className="smaller-link" href='https://www.chransenlinks.xyz/nuh-uh'>
                    <button className="smaller-new-release-btn-link">
                        <div className="smaller-icon">
                            <FontAwesomeIcon icon="download" />
                        </div>
                        His Chransen - The Order [800 FOLLOWER FREE DL]
                    </button>
                </a>
            </div>

            <div className='homepage-link-wrapper'>
                <Link className="homepage-link" to="/">
                    Return to Homepage
                </Link>
            </div>
        </div>
      </div>
    );
  }
}