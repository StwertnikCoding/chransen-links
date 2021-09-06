import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import PromiseCover from '../images/promise-cover';

export default class PromiseButtonContainer extends Component {
  render() {
    return (
        <div className="new-release-btn-links-wrapper">
        
            <div className="cover-image-wrapper">
                <PromiseCover />
            </div>


            <div className="new-release-heading">
                <h2>His Chransen x ASTRoNoT - Promise U That</h2>
            </div>

            <div className='new-release-btn-link-wrapper'>
                    
                    <a className="bigger-link" href='https://soundcloud.com/astronot88/promise-u-that-astronot-x-his-chransen?in=chransen/sets/collabs-released-elsewhere'>
                        <button className="new-release-btn-link">
                            <div className="new-release-social-icon"> 
                                <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                            </div>
                            His Chransen x ASTRoNoT - Promise U That
                        </button>
                    </a>
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