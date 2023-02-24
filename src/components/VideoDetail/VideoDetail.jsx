import React from "react";
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="press_enter">
      <h2>Press enter to search and select the video...</h2>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  // console.log(typeof video);

  return (
    <div className="video_player">
      <div className="div_display">
        <iframe className="display" src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="title_and_describe">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
