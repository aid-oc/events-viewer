import React from 'react';
import PropTypes from 'prop-types';
import Event from '../EventEntry/Event';
import Poster from '../EventEntry/Poster';
import { eventShape, posterShape } from '../eventsShape';
import { EventItem, EventItems } from './EventList.styles';

const EventList = ({ events }) => (
  <EventItems>
    {events.map((eventEntry) => (
      <EventItem key={`event-${eventEntry.poster.name}-${eventEntry.event.date}`}>
        <Poster poster={eventEntry.poster} />
        <Event event={eventEntry.event} />
      </EventItem>
    ))}
  </EventItems>
);

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    event: eventShape,
    poster: posterShape,
  })).isRequired,
};

export default EventList;
