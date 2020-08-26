import React from 'react';
import { useMutation } from '@apollo/client';
import { eventShape } from '../eventsShape';
import { EventDetails, EventWarning } from './Event.styles';
import deleteMutation from '../../graph/mutations/deleteEvent';
import getAllEvents from '../../graph/queries/getAllEvents';

const Event = ({
  event,
}) => {
  const {
    id, description, date, guestCount, type,
    postcode, address, cancelled, budget, dietary,
  } = event;
  const [deleteEvent] = useMutation(deleteMutation, {
    variables: { id },
    refetchQueries: [{ query: getAllEvents }],
  });
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
      {cancelled && (
      <>
        <EventWarning>This event has been cancelled.</EventWarning>
        <button type="button" onClick={() => { deleteEvent(); }}>Delete (Actually)</button>
      </>
      )}
    </EventDetails>
  );
};

Event.propTypes = {
  event: eventShape.isRequired,
};

export default Event;
