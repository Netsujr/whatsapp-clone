import React, { useEffect, useState } from 'react';
import db from '../firebase';
import styled from 'styled-components';
import SidebarChat from './SidebarChat';

function SidebarChats() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("Rooms").onSnapshot((snapshot) =>
      setRooms(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
    ));
  }, []);


  return (
    <SidebarChatsContainer>

      <SidebarChat addNewChat />
      {rooms.map((room) => (
        <SidebarChat key={room.id} id={room.id} name={room.data.name} />
      ))}

    </SidebarChatsContainer>
  );
};

export default SidebarChats;

const SidebarChatsContainer = styled.div`
  flex: 1;
  background-color: white;
  overflow: scroll;

  `;
