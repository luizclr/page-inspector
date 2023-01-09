import styled from "styled-components";

import { LoadingProps } from "~/components/loading/types";

export const Background = styled.div<LoadingProps>`
  z-index: 10;
  width: 100%;
  height: 100%;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
