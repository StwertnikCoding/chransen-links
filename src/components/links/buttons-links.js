import React, { Component } from 'react';

export default class BtnLinks extends Component {
  render() {
    return (
      <div>
        <div>
            <a href='https://soundcloud.com/chransen'>
                <button class="soundcloud">
                    Soundcloud
                </button>
            </a>
        </div>

        <div>
            <a href='https://open.spotify.com/artist/6VVQxpU220vD1zUgpxaABV'>
                <button class="spotify">
                    Spotify
                </button>
            </a>
        </div>

        <div>
            <a href='https://music.amazon.com/artists/B085DFWDT8/his-chransen'>
                <button class="amazon-music">
                    Amazon Music
                </button>
            </a>
        </div>

        <div>
            <a href='https://music.apple.com/us/artist/his-chransen/1501274074'>
                <button class="apple-music">
                    Apple Music
                </button>
            </a>
        </div>

        


      </div>
    );
  }
}
