import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.p`
  margin: 15px 0;
  text-align: center;
  width: 400px;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #8ef091;
  padding: 10px;
  border-radius: 4px;
  width: 200px;
  color: #1a4d1c;
  font-weight: bold;
  font-size: 14pt;
  border: 3px solid #3c863f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #5dc460;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 25px;
  margin-left: 10px;
`;

export const Alert = styled.p<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  background-color: #a0c9ff;
  border-radius: 4px;
  padding: 10px;
  position: absolute;
  top: -45px;
`;
