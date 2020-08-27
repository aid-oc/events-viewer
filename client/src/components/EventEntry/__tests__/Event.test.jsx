import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Event from '../Event';
import deleteEventMutation from '../../../graph/mutations/deleteEvent';

const testEventData = (cancelled = false, dietary = null) => ({
  id: 'someId',
  description: 'someDescription',
  date: '27/08/2020',
  guestCount: 4,
  type: 'someType',
  postcode: 'somePostcode',
  address: 'someAddress',
  budget: 400,
  cancelled,
  dietary,
});

describe('<Event />', () => {
  it('Should match snapshot, shows event data, no dietary or cancellation warning if not provided', () => {
    const { asFragment } = render(
      <MockedProvider mocks={[]}>
        <Event event={testEventData()} />
      </MockedProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match snapshot, showing cancellation warning if provided', () => {
    const { asFragment } = render(
      <MockedProvider mocks={[]}>
        <Event event={testEventData(true)} />
      </MockedProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match snapshot, showing dietary if provided', () => {
    const { asFragment } = render(
      <MockedProvider mocks={[]}>
        <Event event={testEventData(false, ['vegetarian'])} />
      </MockedProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should perform a mutation without issues preventing a successful render', async () => {
    const mutationMock = [
      {
        request: {
          query: deleteEventMutation,
          variables: { id: 'someId' },
        },
        result: { data: jest.fn(() => ({ id: 'someId' })) },
      },
    ];
    const { getByText, asFragment } = render(
      <MockedProvider mocks={mutationMock}>
        <Event event={testEventData(true)} />
      </MockedProvider>,
    );
    fireEvent.click(getByText('Delete (Actually)'));
    expect(asFragment()).toMatchSnapshot();
  });
});
