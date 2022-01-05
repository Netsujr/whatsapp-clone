import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';
import db from '../firebase';
import { Link } from 'react-router-dom';
// import { useStateValue } from '../StateProvider';


function SidebarChat({ addNewChat, id, name }) {
  // const [{ user }, dispatch] = useStateValue();
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");


  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', "desc")
        .onSnapshot(snapshot =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
      )
    }
  }, []);

  useEffect(() => {

    setSeed(Math.random() * 123);
    // could use this to also generate an ID?
  }, []);

  const createChat = () => {
    const roomName = prompt('Please enter name for chat');

    if (roomName) {
      //database firebase stuff
      db.colletion("rooms").add({
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
        <p>{messages[0]?.message }</p>
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
