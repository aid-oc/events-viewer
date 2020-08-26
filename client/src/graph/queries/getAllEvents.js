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
        id
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
