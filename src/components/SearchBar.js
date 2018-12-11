import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);

  }

  onSearchInput = (event) => {
    console.log(event.target.value);
    this.props.searchCallback(event.target.value);
  };

  render() {
    return (
      <section className="search-bar">
        <input
          name="search"
          placeholder="Filter Pets"
          onChange={this.onSearchInput}
          />
      </section>
    );
  }
};

SearchBar.propTypes = {

};

export default SearchBar;
