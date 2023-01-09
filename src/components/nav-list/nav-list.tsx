import { ReactElement, useState } from "react";

import { List, NavItem } from "~/components/nav-list/nav-list.styles";
import { NavListProps } from "~/components/nav-list/types";

export const NavList = ({ list }: NavListProps): ReactElement => {
  const [active, setActive] = useState(list[0].label);

  return (
    <List>
      {list.map((item) => (
        <li key={item.label}>
          <NavItem
            onClick={() => {
              setActive(item.label);
            }}
            to={item.to}
            isActive={item.label === active}
          >
            {item.label}
          </NavItem>
        </li>
      ))}
    </List>
  );
};
