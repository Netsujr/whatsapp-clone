import React from 'react';
import styled from 'styled-components';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

function SidebarHeaderRight() {
  return (
    <SidebarHeaderRight>
      <IconButton>
        <DonutLargeIcon />
      </IconButton>
      <IconButton>
        <ChatIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </SidebarHeaderRight>
  );
}

export default SidebarHeaderRight;

const SidebarHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;

  .MuiSvgIcon-root {
    margin-right: 2vw;
    font-size: 24px !important;
  }
  `;
