import styled from "styled-components";

import { Card } from "~/components/card/card";

export const Title = styled.h2`
  font-size: 18pt;
  margin-bottom: 20px;
  margin-left: 30px;
  color: #474b4e;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const SearchListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid #c6c6c6;
  padding-right: 15px;
  max-height: 250px;
`;

export const SearchList = styled.ul`
  width: 200px;
  height: 100%;
  overflow-y: auto;
  padding-right: 10px;
`;

export const SearchListItem = styled(Card)`
  width: 100%;
  margin-bottom: 5px;
  padding: 10px;
`;

export const ReloadButton = styled.button`
  margin: 15px;
  font-size: 12pt;
  padding: 10px;
  border: none;
  border-radius: 5px;
  border: 1px solid #5dc460;
  background-color: #fff;
  color: #42ab49;
  font-weight: bold;

  :hover {
    background-color: #5dc460;
    color: #fff;
  }
`;

export const RemoveButton = styled.button`
  margin: 15px;
  font-size: 12pt;
  padding: 10px;
  border: none;
  border-radius: 5px;
  border: 1px solid #ff6961;
  background-color: #fff;
  color: #c63637;
  font-weight: bold;

  :hover {
    background-color: #ff6961;
    color: #fff;
  }
`;

export const ResultListWrapper = styled.div`
  width: 100%;
`;

export const ResultList = styled.ul`
  list-style-type: none;
  max-height: 200px;
  overflow-y: auto;
  padding-left: 15px;
`;

export const ResultListItem = styled.li`
  padding: 5px;
`;
