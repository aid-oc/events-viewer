import React from 'react';
import { eventShape } from '../eventsShape';
import { EventDetails, EventWarning } from './Event.styles';

const Event = ({
  event,
}) => {
  const {
    description, date, guestCount, type, postcode, address, cancelled, budget, dietary,
  } = event;
  return (
    <EventDetails>

      <p>
        <b>Date: </b>
        {`${date}`}
      </p>
      <p>
        <b>Budget: </b>
        {`£${budget}`}
      </p>
      <p>
        <b>Guests: </b>
        {guestCount}
      </p>
      <p>
        <b>Event Type: </b>
        {type}
      </p>
      <p>
        <b>Description: </b>
        {description}
      </p>
      {dietary && dietary.length && (
      <p>
        <b>Dietary: </b>
        {dietary.join(', ')}
      </p>
      )}

      <p>
        <b>Location: </b>
        {`${postcode}, ${address}`}
      </p>
      {cancelled && <EventWarning>This event has been cancelled.</EventWarning> }
    </EventDetails>
  );
};

Event.propTypes = {
  event: eventShape.isRequired,
};

export default Event;
