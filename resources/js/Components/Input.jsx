import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ label, id, error, isSuccess, ...attr }) {
  return (
    <label htmlFor={id} className="form-label">
      {label}
      <input {...attr} className="form-control mt-2" id={id} />
      {error && <span className="fz-12 text-awe-red-first">{error}</span>}
      {isSuccess && <span className="fz-12 text-awe-red-first">Sucesso</span>}
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  isSuccess: PropTypes.bool,
};
Input.defaultProps = {
  label: '',
  error: '',
  isSuccess: false,
};
