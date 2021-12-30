import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import SidebarHeaderRight from './SidebarHeaderRight';

function SidebarHeader() {
  return (
    <SidebarHeaderWrap>
      <Avatar />
      <SidebarHeaderRight />
    </SidebarHeaderWrap>
  );
}

export default SidebarHeader;

const SidebarHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;
  `;
