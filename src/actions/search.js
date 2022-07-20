import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    return setTimeout(() => {
      dispatch({
        type: 'SEARCH_VIDEO',
        videos: searchYouTube({YOUTUBE_API_KEY, q})
      });
    }, 1000);
  };
};

export default handleVideoSearch;
