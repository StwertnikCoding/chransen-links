import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default class NewReleaseButtonContainer extends Component {
  render() {
    return (
        <div className="new-release-btn-links-wrapper">


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

        <div className='homepage-link-wrapper'>
            <Link className="homepage-link" to="/">
                Return to Homepage
            </Link>
        </div>
    </div>
    );
  }
}