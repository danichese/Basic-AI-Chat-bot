import React from 'react';
import './App.css';
import TitleComponent from './Components/Title';
import ChatboxComponent from './Components/Chatbox';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleComponent />
        <ChatboxComponent/>
      </header>
    </div>
  );
}

export default App;
