import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../styles/ChatMessage.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import background from "../images/whats-app-background.jpeg";

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
        <div className={`chat_message ${true && 'chat_receiver'}`}>

          <ChatName>
            Renato Delboni
          </ChatName>
          Hello Guys
          <ChatTimeStamp>
            12:00am
          </ChatTimeStamp>

        </div >
      </ChatBody>
      <ChatFooter>

      </ChatFooter>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;

  /* background-color:blue; */

  `;

const ChatHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  `;

const ChatHeaderInfo = styled.div`
  flex: 1;
  padding-left: 20px;

  h3 {
    margin-bottom: 3px;
    font-weight: 600;
  }

  p {
    color: gray;
  }
  `;

const ChatHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;
  `;

const ChatBody = styled.div`
  flex: 1;
  background-image: url(${background});
  /* opacity: 0.5; */
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow: scroll;
  /* background-color: yellow; */

  /* background-image: url('https://user-images.githubusercontent.com/15075759/287119144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'); */
  `;

const ChatFooter = styled.div`

  `;

const ChatTimeStamp = styled.span`
  margin-left: 10px;
  font-size: xx-small;
  `;

const ChatName = styled.span`
  position: absolute;
  top: -15px;
  font-weight: 800;
  font-size: xx-small;
  `;
