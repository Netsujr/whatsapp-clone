import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../styles/ChatMessage.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import background from "../images/whats-app-background.jpeg";
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { useStateValue } from '../StateProvider';


function Chat() {

  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  const [messages, setMessages] = useState([]);
  const [{user}] = useStateValue();


  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot(snapshot => (
          setRoomName(snapshot.data().name)
        ));
      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => (
          setMessages(snapshot.docs.map(doc => doc.data()))
        ));
    }
  }, [roomId]);



  useEffect(() => {

    setSeed(Math.random() * 123);
    // could use this to also generate an ID?
  }, [roomId]);

  const sendMessage = (event) => {
    event.preventDefault();
    console.log('You typed:', input);
    setInput("");
  };

  return (
    <Container>
      <ChatHeader>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <ChatHeaderInfo>
          <h3>{roomName}</h3>
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
        {messages.map(message => (

          <div className={`chat_message ${true && 'chat_receiver'}`}>

            <ChatName>
              {message.name}
            </ChatName>
            {message.message}
            <ChatTimeStamp>
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </ChatTimeStamp>

          </div >
        ))}
      </ChatBody>
      <ChatFooter>
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={(event) => setInput(event.target.value)} type="text" placeholder="Type a message..." />
          <button onClick={sendMessage} type='submit' >Send Message</button>
        </form>
        <MicIcon />
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 62px;
        border-top: 1px solid lightgray;

        .MuiSvgIcon-root {
          padding: 10px;
          color: gray;
        }

        form {
          display: flex;
          flex: 1;
          input {
            flex: 1;
            border-radius: 30px;
            padding: 10px;
            border: none;
          }
          button {
            display: none;
          }
        }
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
