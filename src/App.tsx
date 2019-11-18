import React from 'react';
import './App.css';
import NameGenerator from "./views/NameGenerator";

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <NameGenerator/>
      </div>
    </div>
  );
};

export default App;
