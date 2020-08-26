import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { posterShape } from '../eventsShape';
import PosterArea from './Poster.styles';

const Poster = ({ poster }) => {
  const {
    email, image, name, phone,
  } = poster;
  return (
    <PosterArea>
      <img src={image} alt={`${name}`} />
      <h4><b>{name}</b></h4>
      <span>
        <a href={`mailto: ${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        {` ${email}`}
      </span>
      <p>{phone}</p>
    </PosterArea>
  );
};

Poster.propTypes = {
  poster: posterShape.isRequired,
};

export default Poster;
