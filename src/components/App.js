import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import SearchContainer from '../containers/SearchContainer.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';

class App extends React.Component {
  // constructor(props) {
  //   console.log(props);
  //   super(props);

  //   // this.state = {
  //   //   videos: [],
  //   //   currentVideo: null
  //   // };

  //   //this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  // }

  componentDidMount() {
    console.log('inside componentDidMount: ', this.props);
    SearchContainer('react tutorials');
    //this.props.handleSearchInputChange('react tutorials');
  }

  handleVideoListEntryTitleClick(video) {
    //this.setState({currentVideo: video});
    this.props.handleVideoListEntryTitleClick();
  }

  getYouTubeVideos(query) {
    // var options = {
    //   key: this.props.API_KEY,
    //   query: query
    // };

    // this.props.searchYouTube(options, (videos) =>
    //   this.setState({
    //     videos: videos,
    //     currentVideo: videos[0]
    //   })
    // );
    this.props.handleSearchInputChange(query);
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            {/* <Search getYouTubeVideos={this.getYouTubeVideos.bind(this)}/> */}
            {console.log('searchcontainer')}
            <SearchContainer/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <VideoPlayer video={this.props.currentVideo}/> */}
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            {/* <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.props.videos}
            /> */}
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
