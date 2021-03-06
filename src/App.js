import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './services/AppContext'

import Routes from './routes'

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
