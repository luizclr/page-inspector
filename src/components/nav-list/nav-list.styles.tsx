import { Link } from "react-router-dom";
import styled from "styled-components";

import { LinkProps } from "~/components/nav-list/types";

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: flex-end;
  padding-left: 20px;
`;

export const NavItem = styled(Link)<LinkProps>`
  display: flex;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
  text-decoration: none;
  padding: ${({ isActive }) => (isActive ? "15px" : "10px")} 10px;
  background-color: ${({ isActive }) => (isActive ? "#ee4a00" : "#ff6d2a")};
  color: #fff;
`;
