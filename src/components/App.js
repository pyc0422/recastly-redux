import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import SearchContainer from '../containers/SearchContainer.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';


class App extends React.Component {

  componentDidMount() {
    this.props.handleSearch('react tutoral');
  }


  // getYouTubeVideos(query) {
  //   // var debounceSearch = _debounce(this.props.handleSearch(query), 5000);
  //   // var d = _debounce(function(query) {
  //   //   this.props.handleSearch(query);
  //   // }, 5000);
  //   // d();
  //   // _.debounce(function(query) {
  //   //   this.props.handleSearch(query);
  //   // }, 5000);
  //   // debounceSearch();
  //   this.props.handleSearch(query);
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}

//export default App;
const mapDispatchProps = (dispatch) => {
  return {
    handleSearch: (q) => dispatch(handleSearchChange(q))
  };
};

export default connect(null, mapDispatchProps)(App);

