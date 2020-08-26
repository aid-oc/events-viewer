import PropTypes from 'prop-types';

export const eventShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  guestCount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  cancelled: PropTypes.bool.isRequired,
  budget: PropTypes.number.isRequired,
  dietary: PropTypes.arrayOf(PropTypes.string),
});

export const posterShape = PropTypes.shape({
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
});
