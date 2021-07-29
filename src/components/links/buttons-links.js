import React, { Component } from 'react';

export default class BtnLinks extends Component {
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




      </div>
    );
  }
}
