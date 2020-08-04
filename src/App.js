import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Marc Music" scroll>
          <Navigation>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Link to="/music">Music</Link>
          </Navigation>
        </Header>
        <Drawer title="Marc Music">
          <Navigation>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Link to="/music">Music</Link>
          </Navigation>
        </Drawer>

        <Content>
          <div className="page-content" />
          <Main />
        </Content>
        <Footer size="mini">
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
      </Layout>
    </div>
  );
}

export default App;
