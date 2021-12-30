// import '../Style/Sidebar.css';
import React from 'react';
import styled from 'styled-components';
import SidebarHeader from './components/SidebarHeader';




function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader />
    </SidebarContainer>
  );
};

export default Sidebar;


const SidebarContainer = styled.div`
  flex: 0.35;
  `;
