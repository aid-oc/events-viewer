import React from 'react';
import { useMutation } from '@apollo/client';
import { eventShape } from '../eventsShape';
import { EventDetails, EventWarning } from './Event.styles';
import deleteMutation from '../../graph/mutations/deleteEvent';
import getAllEvents from '../../graph/queries/getAllEvents';
import EventInfo from './EventInfo';

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
      <EventInfo title="Date">
        {date}
      </EventInfo>
      <EventInfo title="Budget">
        {`£${budget}`}
      </EventInfo>
      <EventInfo title="Guests">
        {guestCount}
      </EventInfo>
      <EventInfo title="Event Type">
        {type}
      </EventInfo>
      <EventInfo title="Description">
        {description}
      </EventInfo>
      {dietary && dietary.length
      && (
      <EventInfo title="Dietary">
        {dietary.join(', ')}
      </EventInfo>
      )}
      <EventInfo title="Location">
        {`${postcode}, ${address}`}
      </EventInfo>
      {cancelled && (
      <>
        <EventWarning>This event has been cancelled.</EventWarning>
        <button type="button" onClick={() => deleteEvent()}>
          Delete (Actually)
        </button>
      </>
      )}
    </EventDetails>
  );
};

Event.propTypes = {
  event: eventShape.isRequired,
};

export default Event;
