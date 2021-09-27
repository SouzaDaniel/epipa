import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ label, id, error, success, ...attr }) {
  return (
    <label htmlFor={id} className="form-label">
      {label}
      <input {...attr} className="form-control mt-2" id={id} />
      {error && <span className="fz-12 text-awe-red-first">{error}</span>}
      {success && <span className="fz-12 text-awe-green-first">{success}</span>}
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  success: PropTypes.string,
};
Input.defaultProps = {
  label: '',
  error: '',
  success: '',
};
