import React from 'react';
import {
  render,
} from '@testing-library/react';
import EventSection from '../EventSection';

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: jest.fn(),
}));
const apolloMock = require('@apollo/client');

describe('<EventSection />', () => {
  it('Should display a loading state when the query has not yet fetched data', () => {
    apolloMock.useQuery.mockImplementation(() => ({ loading: true, error: false, data: null }));
    const { asFragment } = render(
      <EventSection />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should display an error state when the query fails', () => {
    apolloMock.useQuery.mockImplementation(() => ({ loading: false, error: true, data: null }));
    const { asFragment } = render(
      <EventSection />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should display data if the query was successful', () => {
    apolloMock.useQuery.mockImplementation(() => (
      {
        loading: false,
        error: false,
        data: { events: [] },
      }));
    const { asFragment } = render(
      <EventSection />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
