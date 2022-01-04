// import logo from './logo.svg';
import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import './App.css';
import Chat from './components/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <h1>Renato's WhatsApp Chat</h1>
      <AppBody>
        <Sidebar />
        <Router>
          <Routes>
            <Route path='/rooms/:roomId' element={<Chat />} />
            <Route path='/' element={<Chat />} />
          </Routes>
        </Router>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  width: 90vw;
  height: 90vh;
  background-color: #ededed;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
  `;
