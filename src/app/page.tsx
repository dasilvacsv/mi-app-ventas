"use client";

import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { SalesTracker } from './components/SalesTracker';

function App() {
  return (
    <ThemeProvider>
      <SalesTracker />
    </ThemeProvider>
  );
}

export default App;