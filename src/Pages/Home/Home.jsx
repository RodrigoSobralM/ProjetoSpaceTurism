import React from "react";
import "./index.scss";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <div className="home">
      <div className="Header">
        <Header />
      </div>
      <div className="home__content">
        <div className="textInformation">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <h3>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </h3>
        </div>
        <button>EXPLORE</button>
      </div>
    </div>
  );
};

export default Home;
