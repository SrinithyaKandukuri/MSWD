import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 248px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
`;

export const SidebarItem = styled.li`
  list-style-type: none;
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  color: #5f6165;
  &: hover {
    background-color: #f3f5f8;
  }
`;

export const LogoHolder = styled.div`
  background-color: #a162f7;
  padding: 10px;
  border-radius: 6px;
`;
