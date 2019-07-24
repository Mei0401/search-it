import React from "react";
import ImageApp from "./ImageApp";
import VideoApp from "./VideoApp";

const App = () => {
  return (
    <div>
      {/* header */}
      <div className="ui attached stackable menu">
        <div className="ui container">
          <a href="#" class="header item">
            <img
              class="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4PShxqzEyRLnMhfEom6n_HO8zQyx0tVgnuAjPYaRMWCWtlo1"
              alt="logo"
            />
            Search It!
          </a>
          <a className="item">
            <i class="file image icon" /> Image Search
          </a>
          <a className="item">
            <i class="file video icon" /> Video Search
          </a>
          <a className="item">
            <i className="info circle icon" /> About this site
          </a>
        </div>
      </div>
      <ImageApp />
      {/* <VideoApp /> */}
    </div>
  );
};

export default App;
