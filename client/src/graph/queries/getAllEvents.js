import { gql } from '@apollo/client';

export default gql`
{
    events {
      poster {
        email
        image
        name
        phone
      }
      event {
        description
        date
        guestCount
        type
        postcode
        address
        cancelled
        budget
        dietary
      }
    }
  }
`;
