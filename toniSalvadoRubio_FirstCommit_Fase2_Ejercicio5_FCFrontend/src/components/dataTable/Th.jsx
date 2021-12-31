/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Th = ({ sortedBy, sort, label }) => {
  const changeSort = (direction) => {
    sort.changer((prev) => ({
      ...prev,
      sortedBy: {
        [sort.key]: direction,
      },
    }));
  };
  return (
    <th>
      {label}
      {sort ? (
        <>
          {sortedBy && sortedBy[sort.key] === 'ascending' ? (
            <i
              className="bi bi-arrow-down-up"
              onClick={() => changeSort('descending')}
            />
          ) : (
            <i
              className="bi bi-arrow-down-up"
              onClick={() => changeSort('ascending')}
            />
          )}
        </>
      ) : null}
    </th>
  );
};

Th.propTypes = {
  sortedBy: PropTypes.object.isRequired,
  sort: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default Th;
