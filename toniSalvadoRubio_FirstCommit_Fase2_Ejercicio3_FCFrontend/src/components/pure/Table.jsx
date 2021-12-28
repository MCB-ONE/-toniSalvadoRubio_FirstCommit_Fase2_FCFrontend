/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

/** Import styles */
import './table.scss';

function Table({ data, colNames }) {
  return (
    <div className="cm-table">
      {
        data.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                {colNames.map((headerItem, index) => {
                  return (
                    <th key={index} scope="col">
                      {headerItem}
                      {' '}
                      <i className="bi bi-arrow-down-up" />
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {
                Object.values(data).map((obj, index) => (
                  <tr key={index}>
                    {Object.values(obj).map((value, i) => (
                      i !== 5 ? <td key={i}>{value}</td> : (
                        <td className="tags" key={i}>
                          <span key={0}>{value[0]}</span>
                          <span key={1}>{value[1]}</span>
                          {value.length >= 3 ? (
                            <span key={2} className="num">
                              +
                              {value.length - 2}
                            </span>
                          ) : null}
                        </td>
                      )
                    ))}
                  </tr>
                ))
              }
            </tbody>
          </table>

        )
      }
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  colNames: PropTypes.array.isRequired,
};

export default Table;
