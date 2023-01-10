import styled from "styled-components";

export const Title = styled.h2`
  font-size: 18pt;
  margin-bottom: 20px;
  margin-left: 30px;
  color: #474b4e;
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
