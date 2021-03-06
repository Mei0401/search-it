import React from "react";
import "./VideoItem.css";

const VideoItem = ({ vid, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(vid)}>
      <img
        alt={vid.snippet.title}
        src={vid.snippet.thumbnails.medium.url}
        className="ui image"
      />
      <div className="content">
        <div className="header">{vid.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
