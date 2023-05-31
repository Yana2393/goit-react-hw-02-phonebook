import React from 'react';
import PropTypes from 'prop-types';

function Filter({filter, filterChange}) {
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
          value={filter}
          onChange={filterChange}
        />
      </div>
    );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
