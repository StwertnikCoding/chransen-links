import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ChransenLogo from '../images/chransen-logo';

export default class ComingSoonButtonContainer extends Component {
  render() {
    return (
        <div className="new-release-btn-links-wrapper">
        
        <div className="cover-image-wrapper">
            <ChransenLogo />
        </div>


        <div className="new-release-heading">
            <h1>Coming Soon</h1>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to="/nuh-uh">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                    </div>

                    His Chransen - Coming Soon on Soundcloud
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to="/nuh-uh">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                    </div>

                    His Chransen - Coming Soon on Youtube

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