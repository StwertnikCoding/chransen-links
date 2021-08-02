import React from 'react';
import { Link } from 'react-router-dom';
import WrongPageHeadingContainer from '../containers/wrong-page-heading-container';
import IconContainer from '../containers/icon-container';

export default function() {
    return (
        <div className="wrong-page-wrapper">

            <WrongPageHeadingContainer />
            <div className="wrong-page-content-wrapper">
                <div className="wrong-page-image-wrapper">
                    <img className="logo" src={require('../images/wrong-page/wrong-page.png')}></img> 
                </div>

                <div className="wrong-page-heading-wrapper">
                    <h2 className='wrong-page-heading'>
                        Woops! I don't even know how you got here...
                    </h2>

                    <div className="wrong-page-link-wrapper">
                        <Link className="wrong-page-link" to="/">
                            Return to Homepage
                        </Link>
                    </div>
                </div>
                
            </div>
            <IconContainer />
        </div>
    )
}