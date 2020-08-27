import React from 'react';
import {
  render,
} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import EventList from '../EventList';

const createEvent = (id) => ({
  event: {
    id,
    description: 'eventDescription',
    date: 'eventDate',
    guestCount: 1,
    type: 'eventType',
    postcode: 'NG1 4GL',
    address: 'Example Avenue',
    cancelled: false,
    budget: 500,
    dietary: ['vegetarian'],
  },
  poster: {
    email: 'test@feast.com',
    image: 'exampleImageUri',
    name: `${id}-exampleName`,
    phone: '01213590124',
  },
});

const exampleEvents = [createEvent('1'), createEvent('2')];

describe('<EventList />', () => {
  it('Should match snapshot, correctly displaying two events', () => {
    const { asFragment } = render(
      <MockedProvider mocks={[]}>
        <EventList events={exampleEvents} />
      </MockedProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
