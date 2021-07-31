import React, { Component } from 'react';

export default class LinkContainer extends Component {
  render() {
    return (
      <div className="btn-links-wrapper">
        <div className='btn-link-wrapper'>
            <a href='https://soundcloud.com/chransen'>
                <button className="btn-link">
                    Soundcloud
                </button>
            </a>
        </div>

        <div className ="btn-link-wrapper">
            <a href='https://open.spotify.com/artist/6VVQxpU220vD1zUgpxaABV'>
                <button className="btn-link">
                    Spotify
                </button>
            </a>
        </div>

        <div className="btn-link-wrapper">
            <a href='https://www.youtube.com/channel/UC3qtq7c7WN4hVHIg4V-oXgA'>
                <button className="btn-link">
                    Youtube
                </button>
            </a>
        </div>

        <div className="btn-link-wrapper">
            <a href='https://music.amazon.com/artists/B085DFWDT8/his-chransen'>
                <button className="btn-link">
                    Amazon Music
                </button>
            </a>
        </div>

        <div className="btn-link-wrapper">
            <a href='https://music.apple.com/us/artist/his-chransen/1501274074'>
                <button className="btn-link">
                    Apple Music
                </button>
            </a>
        </div>

        <div className="btn-link-wrapper">
            <a href='https://tidal.com/browse/artist/18425683'>
                <button className="btn-link">
                    Tidal
                </button>
            </a>
        </div>
        

        <div className="btn-link-wrapper">
            <a href='https://soundcloud.com/astronot88/promise-u-that-astronot-x-his-chransen'>
                <button className="new-release-btn-link">
                    ASTRoNoT x His Chransen - Promise U That
                </button>
            </a>
        </div>

        <div className="btn-link-wrapper">
            <a href='https://soundcloud.com/chransen/sets/alien-vomit-ep'>
                <button className="new-release-btn-link">
                    His Chransen - Alien Vomit EP 
                </button>
            </a>
        </div>



      </div>
    );
  }
}
