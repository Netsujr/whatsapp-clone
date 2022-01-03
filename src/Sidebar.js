import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SidebarHeader from './components/SidebarHeader';
import SidebarSearch from './components/SidebarSearch';
import db from './firebase';
import SidebarChat from './components/SidebarChat';


function Sidebar(props) {


  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("Rooms").onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )
      ))
    ));

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <SidebarContainer>
      <SidebarHeader />
      <SidebarSearch />
        <SidebarChats>
          <SidebarChat addNewChat />
          <SidebarChat/>
          {rooms.map(room => {
            return (
              <SidebarChat key={room.id} id={room.id} name={room.data.name} />
            );
          })}
        </SidebarChats>
    </SidebarContainer>
  );
};

export default Sidebar;


const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
  `;

const SidebarChats = styled.div`
        flex: 1;
        background-color: white;
        overflow: scroll;

        `;
