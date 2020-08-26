import styled from 'styled-components';

const Section = styled.section`
    text-align: center;
    padding: 1rem;
`;

const Search = styled.input`
    border: 1px solid black;
    border-radius: 0.3rem;
    font-size: 1.2rem;
`;

const FilteringOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
`;

export { Section, Search, FilteringOptions };
