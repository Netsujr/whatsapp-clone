import React from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@material-ui/icons';

function SidebarSearch() {
  return (
    <SidebarSearchWrap>
      <SidebarSearchContainer>
        <SearchOutlined />
        <input placeholder="Search or start new chat" type="text" />
      </SidebarSearchContainer>
    </SidebarSearchWrap>
  );
}

export default SidebarSearch;


const SidebarSearchWrap = styled.div`

  `;

const SidebarSearchContainer= styled.div`

  `;
