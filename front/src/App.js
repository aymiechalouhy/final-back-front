import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import SessionProvider from './Components/sessions/SessionProvider';
import Routes from './Components/Routes';

export default function App() {
  return (
    <SessionProvider>
      <Router>
        <Routes />
      </Router>
    </SessionProvider>
  );
}