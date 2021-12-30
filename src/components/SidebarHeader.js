import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import SidebarHeaderRight from './SidebarHeaderRight';
import SidebarSearch from './SidebarSearch';
import SidebarChats from './SidebarChats';

function SidebarHeader() {
  return (
    <SidebarHeader>
      <Avatar />
      <SidebarHeaderRight />
      <SidebarSearch />
      <SidebarChats />
    </SidebarHeader>
  );
}

export default SidebarHeader;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;
  `;
