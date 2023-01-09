import styled from "styled-components";

import { CardProps, CardShadowSize, CardSize, CardStyle } from "~/components/card/types";
import { isNil } from "~/utils";

const shadowSm = "box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px";
const shadowLg =
  "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);";

const getCardWidth = (size: CardSize): string => {
  if (size === CardSize.sm) return "300px";
  if (size === CardSize.md) return "450px";
  if (size === CardSize.lg) return "600px";
  if (size === CardSize.xg) return "750px";
  return "fit-content";
};

const getCardStyle = (style: CardStyle): string => {
  if (style === CardStyle.dark) return "#f0f1f3";
  return "#fff";
};

const getCardShadow = (shadow: CardShadowSize): string => {
  if (shadow === CardShadowSize.sm) return shadowSm;
  return shadowLg;
};

export const Card = styled.div<CardProps>`
  background-color: ${({ cardStyle = CardStyle.light }) => getCardStyle(cardStyle)};
  border-radius: 5px;
  padding: 20px;
  width: ${({ size = CardSize.sm }) => getCardWidth(size)};
  box-shadow: ${({ shadowSize = CardShadowSize.sm }) => getCardShadow(shadowSize)};

  :hover {
    cursor: ${({ onClick }) => (isNil(onClick) ? "pointer" : "initial")};
  }
`;
