import React from 'react';
import { Footer, FooterSection } from "react-mdl";

function FooterComponent() {
    return (
    <Footer size="mini" style={{zindex: '-1'}}>
          <FooterSection>
            <div className="social-links">
              <a href="https://www.instagram.com/soymarc.music/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/channel/UC_avHGLI62hQ-3vgDJy_-Bw" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-youtube" aria-hidden="true"></i>
              </a>
              <a href="https://www.spotify.com/" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-spotify" aria-hidden="true"></i>
              </a>
              <a href="https://www.apple.com/apple-music/">
                <i className="fab fa-apple"></i>
              </a>
              <a href="https://soundcloud.com/marckovickkk">
                <i className="fab fa-soundcloud" aria-hidden="true"></i>
              </a>
            </div>
          </FooterSection>
        </Footer>
    );
}
    

export default FooterComponent;