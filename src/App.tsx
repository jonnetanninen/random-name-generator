import React from 'react';
import logo from './logo.svg';
import './App.css';
import VikingNamesView from "./modules/viking/VikingNamesView";

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <VikingNamesView/>
      </div>
    </div>
  );
};

export default App;
