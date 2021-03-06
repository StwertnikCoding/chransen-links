import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SpaceCreamAlbumCover from '../images/space-cream-album-cover';

export default class NewReleaseButtonContainer extends Component {
  render() {
    return (
        <div className="new-release-btn-links-wrapper">
        
            <div className="cover-image-wrapper">
                <SpaceCreamAlbumCover />
            </div>


            <div className="new-release-heading">
                <h3>Check Out My Recent Releases Below</h3>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <Link className="bigger-link" to="/space-cream-ep">
                    <button className="new-release-btn-link">
                        Space Cream EP (Out Now)
                    </button>
                </Link>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <Link className="bigger-link" to="/ghost-wobble-vip">
                    <button className="new-release-btn-link">
                        His Chransen - Ghost Wobble (VIP)
                    </button>
                </Link>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <Link className="bigger-link" to="/stimulant-vip">
                    <button className="new-release-btn-link">
                        His Chransen - Stimulant (VIP)
                    </button>
                </Link>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <Link className="bigger-link" to="/spaceghost-thevisit-remix">
                    <button className="new-release-btn-link">
                        SpaceGhost x Brikz x Mammoth (SpaceGhost VIP) (His Chransen Remix)
                    </button>
                </Link>
            </div>

            <div className='new-release-btn-link-wrapper'>
                
                <Link className="bigger-link" to="/chibs-knock-knock-remix">
                    <button className="new-release-btn-link">
                        Chibs - Knock Knock (His Chransen Remix)
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