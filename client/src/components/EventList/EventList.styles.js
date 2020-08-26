import styled from 'styled-components';

const EventItem = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    border-radius: 1rem;
    padding: 1rem;
    text-align: left;
    max-width: 20rem;

    -webkit-box-shadow :0px 3px 15px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    
    @media (min-width: 768px)  {
        justify-content: space-around;
        margin: 2rem;
    }
`;

const EventItems = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    @media (min-width: 768px)  {
        flex-direction: row;
    }
`;

export { EventItem, EventItems };
