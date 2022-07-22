import React from 'react';
import _debounce from 'lodash/debounce';

class Search extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: ''
  //   };
  // }

  handleInputChange(e) {
    var value = e.target.value;
    var debounceInputChange = _debounce(() => {
      this.props.handleSearchInputChange(value);
    }, 500);
    //this.props.handleSearchInputChange(e.target.value);
    debounceInputChange();
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          //value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
