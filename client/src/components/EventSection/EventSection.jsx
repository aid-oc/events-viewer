import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import getAllEvents from '../../graph/queries/getAllEvents';
import EventList from '../EventList/EventList';
import { Section, Search, FilteringOptions } from './EventSection.styles';
import filterEvents from './helpers/filterEvents';

const EventSection = () => {
  const { loading, error, data } = useQuery(getAllEvents);
  const [filterTerm, setFilterTerm] = useState(null);
  const [hideCancelled, setHideCancelled] = useState(false);
  return (
    <Section>
      <h2>Event Postings</h2>
      <Search type="search" placeholder="Search..." onChange={(e) => setFilterTerm(e.target.value)} />
      <FilteringOptions>
        <label htmlFor="showCancelledEvents">
          <input type="checkbox" id="showCancelledEvents" name="showCancelledEvents" checked={hideCancelled} onChange={() => setHideCancelled(!hideCancelled)} />
          Hide cancelled events?
        </label>
      </FilteringOptions>
      { loading && <p>Loading Events...</p>}
      { error && <p>Failure loading events, sorry!</p>}
      { data && <EventList events={filterEvents(filterTerm, hideCancelled, data.events)} />}
    </Section>
  );
};

export default EventSection;
