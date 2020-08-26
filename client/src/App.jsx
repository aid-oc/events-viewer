import React from 'react';
import EventSection from './components/EventSection/EventSection';
import { Main, Header } from './App.styles';

const App = () => (
  <div className="App">
    <Main>
      <Header>
        <h1>Feast It</h1>
      </Header>
      <EventSection />
    </Main>
  </div>
);

export default App;
