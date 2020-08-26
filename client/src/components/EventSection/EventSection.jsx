import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import getAllEvents from '../../graph/queries/getAllEvents';
import EventList from '../EventList/EventList';
import { Section, Search } from './EventSection.styles';

const filterEvents = (filter, events) => events.filter((eventEntry) => {
  const eventData = JSON.stringify(eventEntry.event);
  const posterData = JSON.stringify(eventEntry.poster);
  return !filter || eventData.includes(filter) || posterData.includes(filter);
});

const EventSection = () => {
  const { loading, error, data } = useQuery(getAllEvents);
  const [currentFiltering, setCurrentFiltering] = useState(null);
  return (
    <Section>
      <h2>Event Postings</h2>
      <Search type="search" placeholder="Search..." onChange={(e) => setCurrentFiltering(e.target.value)} />
      { loading && <p>Loading Events...</p>}
      { error && <p>Failure loading events, sorry!</p>}
      { data && <EventList events={filterEvents(currentFiltering, data.events)} />}
    </Section>
  );
};

export default EventSection;
