// import logo from './logo.svg';
import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Sidebar from './Sidebar';
import Login from './components/Login';
import { useStateValue } from './StateProvider';



function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <h1>Renato's WhatsApp Chat</h1><AppBody>
            <Router>
              <Sidebar />
              <Routes>
                <Route exact path='/rooms/:roomId' element={<Chat />} />
                <Route exact path='/' element={<Chat />} />
              </Routes>
            </Router>
          </AppBody>
        </>
      )}
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
