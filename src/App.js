import React from "react";
import "./App.css";
import Route from "./components/Router/Router";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import { Link } from "react-router-dom";
import background from './images/beach.jpg'

function App() {
  return (
    <div>
      <Layout style={{backgroundImage: `url(${background})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat'}}>
        <Header transparent title=" " scroll>
          <Navigation>
            <Link to="/" style={{color: '#003325'}}>Main</Link>
            <Link to="/about" style={{color: '#003325'}}>About</Link>
            <Link to="/music" style={{color: '#003325'}}>Music</Link>
          </Navigation>
        </Header>
        <Drawer title="Marc Music" style={{background: 'linear-gradient(to right, #64b3f4, #c2e59c)'}}>
          <Navigation>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Link to="/music">Music</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Route />
        </Content>      
        <FooterComponent/>
      </Layout>
    </div>
  );
}

export default App;
