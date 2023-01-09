import styled from "styled-components";

export const Title = styled.h2`
  font-size: 18pt;
  margin-bottom: 20px;
  margin-left: 30px;
  color: #474b4e;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  font-size: 12pt;
  padding: 10px;
  width: 400px;
  border: 1px solid #d6d6d6;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: #474b4e;
  outline: none;

  :focus {
  }
`;

export const Button = styled.button`
  margin: 15px;
  font-size: 12pt;
  padding: 10px;
  width: 200px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: #fff;
  font-weight: bold;
  background-color: #5dc460;

  :hover {
    background-color: #42ab49;
  }
`;
