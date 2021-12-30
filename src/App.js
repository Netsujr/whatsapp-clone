// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="app">
      <h1>Renato's WhatsApp Chat</h1>
      <div className="app_body">
        <Sidebar />
        {/* chat area */}
      </div>
    </div>
  );
}

export default App;
