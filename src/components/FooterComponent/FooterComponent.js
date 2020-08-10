import React from 'react';
import { Footer } from "react-mdl";
import spotifyIcon from '../../images/icons/icons8-spotify-128.png';
import appleIcon from '../../images/icons/icons8-mac-os-128.png';
import soundcloudIcon from '../../images/icons/icons8-soundcloud-150.png';
import instagramIcon from '../../images/icons/icons8-instagram-104.png';
import youtubeIcon from '../../images/icons/icons8-youtube-play-192.png';

function FooterComponent() {
    return (
    <Footer style={{textAlign: 'center'}}>
        <div className="social-links">
        <h2>Follow</h2>
          <a href="https://www.instagram.com/soymarc.music/" rel="noopener noreferrer" target="_blank">
          <img className="iconButton" src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UC_avHGLI62hQ-3vgDJy_-Bw" rel="noopener noreferrer" target="_blank">
            <img className="iconButton" src={youtubeIcon} alt="Apple" />
          </a>
          <a href="https://www.spotify.com/" rel="noopener noreferrer" target="_blank">
            <img className="iconButton" src={spotifyIcon} alt="Spotify"/>
          </a>
          <a href="https://www.apple.com/apple-music/">
            <img className="iconButton" src={appleIcon} alt="Apple" />
          </a>
          <a href="https://soundcloud.com/marckovickkk">
            <img className="iconButton" src={soundcloudIcon} alt="Apple" />
          </a>
        </div>
      <div className="container">
        <p className="copyright">
          Built by <a href="https://www.github.com/matiascc" style={{textDecoration: 'none', color: '#d1e0e0'}}>Matías Caporale</a>
        </p>
      </div>
    </Footer>
    );
}
    

export default FooterComponent;
