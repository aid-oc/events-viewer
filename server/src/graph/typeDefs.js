import { gql } from 'apollo-server-express';

export default gql`
  type Poster {
    email: String
    image: String
    name: String
    phone: String
  }

  type Event {
    id: String
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

  type Mutation {
    deleteEvent(id: String): String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
