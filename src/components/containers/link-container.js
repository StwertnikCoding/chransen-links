import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import TheOrderCover from '../images/the-order-cover';
import NewReleaseCover from '../images/promise-cover';

export default class LinkContainer extends Component {
  render() {
    return (
      <div>
        <div className="new-release-btn-links-wrapper">

            <div className="cover-image-wrapper">
                <NewReleaseCover />
            </div>

            <div className="new-release-heading">
                <h3>OUT NOW!</h3>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <a className="bigger-link" href='https://hypedd.it/3j1sl6'>
                    <button className="new-release-btn-link">
                        <div className="new-release-social-icon"> 
                            <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                        </div>
                        
                        His Chransen - The Order on Soundcloud
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                <a className="bigger-link" href='https://hypedd.it/5dbz7u'>
                    <button className="new-release-btn-link">
                        <div className="new-release-social-icon"> 
                            <FontAwesomeIcon icon={['fab', 'spotify']} />
                        </div>

                        His Chransen - The Order on Spotify
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                <a className="bigger-link" href='https://hypedd.it/5vgkxr'>

                    <button className="new-release-btn-link">
                        <div className="new-release-social-icon"> 
                            <FontAwesomeIcon icon={['fab', 'itunes-note']} />
                        </div>

                        His Chransen - The Order on Apple Music
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                <a className="bigger-link" href='https://www.amazon.com/The-Order/dp/B09DC4JXQ9/ref=sr_1_1?dchild=1&keywords=His+Chransen&qid=1629837477&s=dmusic&search-type=ss&sr=1-1'>
                    <button className="new-release-btn-link">
                        <div className="new-release-social-icon"> 
                            <FontAwesomeIcon icon={['fab', 'amazon']} />
                        </div>

                        His Chransen - The Order on Amazon
                    </button>
                </a>
            </div>

            

            <div className='new-release-btn-link-wrapper'>
                <a className="bigger-link" href='https://hypeddit.com/track/bts5s4'>
                    <button className="new-release-btn-link">
                        <div className="new-release-social-icon">
                            <FontAwesomeIcon icon="download" />
                        </div>
                        His Chransen - The Order [800 FOLLOWER FREE DL]
                    </button>
                </a>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <a className="smaller-link" href='https://hypedd.it/nnrztt'>
                    <button className="smaller-new-release-btn-link">
                        <div className="smaller-icon">
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                        </div>
                        His Chransen - The Order (Official Visuals)
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