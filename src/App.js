import React from 'react';

// Import components
import Home from './containers/Home';
import LogIn from './containers/LogIn';
import Dashboard from './containers/Dashboard';

// Main container
function App() {
  return (
      <div>
          <Home />
          <LogIn />
          <Dashboard />
      </div>
  );
}

export default App;
