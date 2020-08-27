import React from 'react';
import {
  render,
} from '@testing-library/react';
import Poster from '../Poster';

const posterData = {
  email: 'codingtest@feastit.com',
  image: 'exampleImage',
  name: 'exampleName',
  phone: '01213580199',
};

describe('<Poster />', () => {
  it('Should match snapshot, correctly displaying poster information as passed', () => {
    const { asFragment } = render(<Poster poster={posterData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
