import React from 'react';
import PropTypes from 'prop-types';

const EventInfo = ({ title, children }) => (
  <p>
    <b>
      {`${title}: `}
    </b>
    {children}
  </p>
);

EventInfo.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default EventInfo;
