import React, { useState } from 'react';
import youtube from '../../api/youtube';
import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/SearchBar/SearchBar';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import VideoList from '../../components/VideoList/VideoList';
import './Search.css';

const Search = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (termFromSearchBar) => {
    setIsLoading(true);
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    });

    setVideos(response.data.items);
    setSelectedVideo(null);
    setIsLoading(false);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className='container_down'>
      <h1 className="title">Get Vídeos</h1>
      <p className="description">
        Search any Youtube vídeo!
      </p>
      <SearchBar handleFormSubmit={handleSubmit}/>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='ui grid'>
          <div className="container_list_player">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
