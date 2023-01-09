import { LinkProps as RouteLinkProps } from "react-router-dom";

export type LinkProps = {
  isActive: boolean;
} & RouteLinkProps;

export interface NavItem {
  to: string;
  label: string;
}

export interface NavListProps {
  list: NavItem[];
}
