import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ChransenLogo from '../images/chransen-logo';

export default class NewReleaseButtonContainer extends Component {
  render() {
    return (
        <div className="new-release-btn-links-wrapper">
        
            <div className="cover-image-wrapper">
                <ChransenLogo />
            </div>


            <div className="new-release-heading">
                <h2>Check Out My Recent Releases Below</h2>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <Link className="bigger-link" to="/the-order">
                    <button className="new-release-btn-link">
                        His Chransen - The Order [800 Follower FREE DL]
                    </button>
                </Link>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <Link className="bigger-link" to="/promise-u-that">
                    <button className="new-release-btn-link">
                        His Chransen x ASTRoNoT - Promise U That
                    </button>
                </Link>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <Link className="bigger-link" to="/coming-soon">
                    <button className="new-release-btn-link">
                        Coming Soon
                    </button>
                </Link>
            </div>
            <div className="exit-buttons-wrapper">
               
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