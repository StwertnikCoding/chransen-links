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
            <h1>Coming Soon !!!!</h1>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to="/coming-soon-album">
                <button className="new-release-btn-link">
                    His Chransen - Coming Soon (Whole Album)
                </button>
            </Link>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <Link className="bigger-link" to="/nuh-uh">
                <button className="new-release-btn-link">
                    His Chransen - Coming Soon (Individual Links)
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