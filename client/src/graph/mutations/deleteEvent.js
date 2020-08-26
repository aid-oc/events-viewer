import { gql } from '@apollo/client';

export default gql`
    mutation DeleteEvent($id: String!) {
        deleteEvent(id: $id)
    }
`;
