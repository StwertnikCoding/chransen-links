import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import KnockKnockCover from '../images/knock-knock-cover';

export default class KnockKnockButtonContainer extends Component {
  render() {
    return (
        <div className="new-release-btn-links-wrapper">
        
        <div className="cover-image-wrapper">
            <KnockKnockCover />
        </div>


        <div className="new-release-heading">
            <h1>OUT NOW!!!</h1>

            <h3># DiscipleRemixComp2</h3>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <a className="bigger-link" href="https://soundcloud.com/chransen/chibs-knock-knock-his-chransen-remix">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'soundcloud']} />
                    </div>

                    Chibs - Knock Knock (His Chransen Remix) on Soundcloud
                </button>
            </a>
        </div>

        <div className='new-release-btn-link-wrapper'>
            
            <a className="bigger-link" href="https://www.youtube.com/watch?v=tB9z0SHBBSI">
                <button className="new-release-btn-link">
                    <div className="new-release-social-icon"> 
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                    </div>

                    Chibs - Knock Knock (His Chransen Remix) (Official Visuals)

                </button>
            </a>
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