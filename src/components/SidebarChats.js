import React from 'react';
import styled from 'styled-components';
import SidebarChat from './SidebarChat';

function SidebarChats() {
  return (
    <SidebarChatsContainer>
      <SidebarChat addNewChat />
      <SidebarChat />
    </SidebarChatsContainer>
  );
}

export default SidebarChats;

const SidebarChatsContainer = styled.div`
  flex: 1;
  background-color: white;
  overflow: scroll;

  `;
