import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function Chat() {

  const [seed, setSeed] = useState("");

  useEffect(() => {

    setSeed(Math.random() * 123);
    // could use this to also genereta an ID?
  }, []);
  return (
    <Container>
      <ChatHeader>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <ChatHeaderInfo>
          <h3>Room Name</h3>
          <p>Last seen at .....</p>
        </ChatHeaderInfo>
        <ChatHeaderRight>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </ChatHeaderRight>
      </ChatHeader>
      <ChatBody>

      </ChatBody>
      <ChatFooter>

      </ChatFooter>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  flex: 0.65;
  /* background-color:blue; */

  `;

const ChatHeader = styled.div`

  `;

const ChatHeaderInfo = styled.div`

  `;

const ChatHeaderRight = styled.div`

  `;

const ChatBody = styled.div`

  `;

const ChatFooter = styled.div`

  `;
