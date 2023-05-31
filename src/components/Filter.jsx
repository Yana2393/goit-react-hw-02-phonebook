import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          required
          value={this.props.filter}
          onChange={this.props.filterChange}
        />
      </div>
    );
  }
}

export default Filter;
