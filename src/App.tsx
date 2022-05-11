import React from 'react';
import './App.css';
import CmpHookEffect from './components/CmpHookEffect';
import CmpHookEffect2 from './components/CmpHookEffect2';
import CmpHookState from './components/CmpHookState';
import ContextHook from './components/ContextHook';

function App() {

  return (
    <div className="App">
        {/* <CmpHookState /> */}
        {/* <CmpHookEffect /> */}
        {/* <CmpHookEffect2 /> */}
        <ContextHook />
    </div>
  );
}

export default App;
