import React from 'react';
import {
  render,
} from '@testing-library/react';
import EventInfo from '../EventInfo';

describe('<EventInfo />', () => {
  it('Should match snapshot, correctly displaying title and children', () => {
    const { asFragment } = render(<EventInfo title="hello">testChild</EventInfo>);
    expect(asFragment()).toMatchSnapshot();
  });
});
