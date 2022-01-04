import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';
import db from '../firebase';
import { Link } from 'react-router-dom';


function SidebarChat({ addNewChat, id, name }) {

  const [seed, setSeed] = useState("");

  useEffect(() => {

    setSeed(Math.random() * 123);
    // could use this to also genereta an ID?
  }, []);

  const createChat = () => {
    const roomName = prompt('Please enter name for chat');

    if (roomName) {
      //database firebase stuff
      db.collection("rooms").add({
        name: roomName
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <ChatContainer>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <SidebarChatInfo>
          <h2>{name}</h2>
          <p>Last Mesasage ...</p>
        </SidebarChatInfo>
      </ChatContainer>
    </Link>
  ) : (
    <ChatContainer onClick={createChat}>
      <h2>Add new Chat</h2>
    </ChatContainer>
  );
}

export default SidebarChat;

const ChatContainer = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;

    &:hover {
      background-color: #ebebeb;
    }

    h2 {
      font-size: 16px;
      margin-bottom: 8px;
    }
    `;

const SidebarChatInfo = styled.div`
    margin-left: 15px;

    `;
