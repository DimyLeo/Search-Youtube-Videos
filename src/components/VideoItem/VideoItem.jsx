import React from 'react';
import './VideoItem.css';

const VideoItem = ({video , handleVideoSelect}) => {
  return (
    <div onClick={ () => handleVideoSelect(video)} className='video-item'>
      <img className='image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
      <div className='datas-item'>
        <div className='title_item'>{video.snippet.title}</div>
      </div>
    </div>
  )
};

export default VideoItem;
