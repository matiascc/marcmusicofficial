import React from "react";
import "./App.css";
import Route from "./components/Router/Router";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="tc">
      <Layout >
        <Header className="header-color" title=" " scroll>
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
        <Content className="bg-content">
          <Route />
        </Content>      
        <FooterComponent/>
      </Layout>
    </div>
  );
}

export default App;
