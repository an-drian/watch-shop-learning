import React from 'react';
import PT from 'prop-types';

export default function Button({ type, position, children }) {
  return (
    <div className={`btn-wrap ${position || ''}`}>
      <button className={`w-btn ${type || ''}`}>{children}</button>
    </div>
  );
}

Button.propTypes = {
  type: PT.oneOf(['primary', 'secondary']),
  position: PT.oneOf(['right', 'left']),
  children: PT.any
};
