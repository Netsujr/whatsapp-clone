import React from 'react';
import styled from 'styled-components';
import SidebarHeader from './components/SidebarHeader';
import SidebarSearch from './components/SidebarSearch';
import SidebarChats from './components/SidebarChats';


function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader />
      <SidebarSearch />
      <SidebarChats />
    </SidebarContainer>
  );
};

export default Sidebar;


const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
  `;
