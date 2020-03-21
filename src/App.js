import React from 'react';
import './App.css';

import Counter from './concepts/core/02-state/counter';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>REACT TRAINING</h1>
        <hr/>
      </header>
      <Counter />
    </div>
  );
}

export default App;
