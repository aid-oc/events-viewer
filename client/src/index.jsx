import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import createClient from './graph/createClient';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={createClient()}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
