import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


function SidebarChat(props) {

  const [seed, setSeed] = useState("");

  useEffect(() => {

    setSeed(Math.random() * 123);
    // could use this to also genereta an ID?
  }, []);

  return (
    <ChatContainer>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <SidebarChatInfo>
        <h2>Room Name</h2>
        <p>Last Mesasage ...</p>
      </SidebarChatInfo>
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
}
`;

const SidebarChatInfo = styled.div`
  margin-left: 15px;

`;
