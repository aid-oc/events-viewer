import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';
import { eventShape, posterShape } from './eventsShape';

const EventList = ({ events }) => <ul>{events.map((event) => <Event {...event} />)}</ul>;

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    event: eventShape,
    poster: posterShape,
  })).isRequired,
};

export default EventList;
