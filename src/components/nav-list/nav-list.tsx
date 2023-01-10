import { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { List, NavItem } from "~/components/nav-list/nav-list.styles";
import { NavListProps } from "~/components/nav-list/types";

export const NavList = ({ list }: NavListProps): ReactElement => {
  const [active, setActive] = useState(list[0].to);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/search") setActive("/search");
    else setActive("/");
  });

  return (
    <List>
      {list.map((item) => (
        <li key={item.label}>
          <NavItem
            onClick={() => {
              setActive(item.label);
            }}
            to={item.to}
            isActive={item.to === active}
          >
            {item.label}
          </NavItem>
        </li>
      ))}
    </List>
  );
};
