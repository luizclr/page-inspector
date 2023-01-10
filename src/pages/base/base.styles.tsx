import styled from "styled-components";

import { Card } from "~/components/card/card";

export const BasePage = styled.div`
  background-color: #f0f1f3;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

export const Title = styled.h1`
  color: #838383;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  font-size: 35pt;
  margin-left: 10px;
`;

export const TitleWrapper = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const SearchIcon = styled.img`
  width: 50px;
`;

export const BaseCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorBar = styled.div`
  background-color: #ff9999;
  color: #881b1b;
  border: 1px solid #881b1b;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px;
  max-width: 400px;
  text-align: center;
`;
