import { PropsWithChildren } from "react";

export enum CardSize {
  sm = "SM",
  md = "MD",
  lg = "LG",
  xg = "XG",
}

export enum CardShadowSize {
  sm = "SM",
  md = "MD",
  lg = "LG",
}

export enum CardStyle {
  light = "light",
  dark = "dark",
}

interface Props {
  size?: CardSize;
  shadowSize?: CardShadowSize;
  cardStyle?: CardStyle;
  onClick?: () => void;
}

export type CardProps = Props & PropsWithChildren;
