import React from 'react';
import { eventShape, posterShape } from './eventsShape';

const Event = ({
  event, poster,
}) => {
  const {
    description, date, guestCount, type, postcode, address, cancelled, budget, dietary,
  } = event;
  const {
    email, image, name, phone,
  } = poster;
  return (
    <li>
      <h4>
        {`${type} event on ${date} with ${guestCount} guests`}
      </h4>
      <p>{`Budget: ${budget}`}</p>
      <p>{description}</p>
      <p>{`Dietary restrictions: ${dietary}`}</p>
      <p>{`Location: ${postcode}, ${address}`}</p>
      <p>{`Cancelled?: ${cancelled}`}</p>
    </li>
  );
};

Event.propTypes = {
  event: eventShape,
  poster: posterShape,

};

Event.defaultProps = {
  dietary: ['none'],
};

export default Event;
