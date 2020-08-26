import React from 'react';
import { useQuery } from '@apollo/client';
import getAllEvents from './graph/queries/getAllEvents';
import EventList from './components/EventList';

const App = () => {
  const { loading, error, data } = useQuery(getAllEvents);
  return (
    <div className="App">
      Feast It Events Viewer
      { loading && <p>Loading Events...</p>}
      { error && <p>Failure loading events, sorry!</p>}
      { data && <EventList events={data.events} />}
    </div>
  );
};

export default App;
