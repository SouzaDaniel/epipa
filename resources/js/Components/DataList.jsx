/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

export default function DataList({
  label,
  id,
  error,
  data,
  success,
  uid,
  ...attr
}) {
  return (
    <label htmlFor={id} className="form-label">
      {label}
      <input
        {...attr}
        className="form-control mt-2"
        id={id}
        list={`datalist.${id}`}
      />
      <datalist id={`datalist.${id}`}>
        {data.map((item) => (
          <option key={item[uid]} value={item[uid]}>
            {item.name}
          </option>
        ))}
      </datalist>
      {error && <span className="fz-12 text-awe-red-first">{error}</span>}
      {success && <span className="fz-12 text-awe-green-first">{success}</span>}
    </label>
  );
}

DataList.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  success: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  uid: PropTypes.string.isRequired,
};
DataList.defaultProps = {
  label: '',
  error: '',
  success: '',
};
