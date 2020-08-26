import { gql } from 'apollo-server-express';

export default gql`
  type Poster {
    email: String
    image: String
    name: String
    phone: String
  }

  type Event {
    description: String
    date: String
    guestCount: Int
    type: String
    postcode: String
    address: String
    cancelled: Boolean
    budget: Float
    dietary: [String]
  }

  type EventListing {
    poster: Poster
    event: Event
  }

  type Query {
    events: [EventListing]
  }

  schema {
    query: Query
  }
`;
