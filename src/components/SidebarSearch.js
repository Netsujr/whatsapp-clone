import React from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@material-ui/icons';

function SidebarSearch() {
  return (
    <SidebarSearchContainer>
      <SidebarSearchWrap>
        <SearchOutlined />
        <input placeholder="Search or start new chat" type="text" />
      </SidebarSearchWrap>
    </SidebarSearchContainer>
  );
}

export default SidebarSearch;


const SidebarSearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 39px;
  padding: 10px;

  input {
    border: none;
    margin-left: 10px;
  }

  .MuiSvgIcon-root {
    color: gray;
    padding: 10px;
  }
  `;

const SidebarSearchWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 35px;
  border-radius: 20px;
  `;
