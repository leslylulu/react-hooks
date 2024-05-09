import React, { useState } from 'react';
import TypeContext from './TypeContext';
import MyButtonGroup from './components/buttonGroup';
import './App.css';

function App() {
  const [type, setType] = useState('default');
  return (
    <div className="App">
      <header className="App-header">
        hooks
      </header>
      <div >
        <h1>useContext</h1>
        <div className='group'>
          <button className='button button-primary' onClick={() => setType('primary')}>Set Primary</button>
          <button className='button button-secondary' onClick={() => setType('secondary')}>Set Secondary</button>
          <button className='button button-default' onClick={() => setType('default')}>Set Default</button>
        </div>
        <TypeContext.Provider value={type}>
          <MyButtonGroup />
        </TypeContext.Provider>
      </div>
    </div>
  );
}

export default App;
