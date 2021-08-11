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

            <div className='new-release-btn-link-wrapper'>
                <a href='https://hypeddit.com/track/t8bqbd'>
                    <button className="new-release-btn-link">
                        His Chransen - The Order on Soundcloud
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                <a href='https://hypeddit.com/track/t8bqbd'>
                    <button className="new-release-btn-link">
                        His Chransen - The Order on Spotify
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                <a href='https://hypeddit.com/track/t8bqbd'>
                    <button className="new-release-btn-link">
                        His Chransen - The Order on Apple Music
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                <a href='https://hypeddit.com/track/t8bqbd'>
                    <button className="new-release-btn-link">
                        His Chransen - The Order on Amazon
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <a className="download-link" href='https://hypeddit.com/track/t8bqbd'>
                    <button className="download-new-release-btn-link">
                        <div className="download-icon">
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