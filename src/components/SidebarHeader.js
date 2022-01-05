import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import SidebarHeaderRight from './SidebarHeaderRight';
import { useStateValue } from '../StateProvider';


function SidebarHeader() {
  const [{ user }] = useStateValue();
  return (
    <SidebarHeaderContainer>
      <Avatar src={user?.photoURL}/>
      <SidebarHeaderRight />
    </SidebarHeaderContainer>
  );
}

export default SidebarHeader;

const SidebarHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;
  `;
