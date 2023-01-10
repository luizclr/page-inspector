import { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { List, NavItem } from "~/components/nav-list/nav-list.styles";
import { NavListProps } from "~/components/nav-list/types";
import { useInspection } from "~/providers/inspection/inspection";
import { InspectionActionTypes } from "~/reducers/inspector/types";

export const NavList = ({ list }: NavListProps): ReactElement => {
  const { dispatch } = useInspection();
  const [active, setActive] = useState(list[0].label);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/search") setActive("Search");
    else setActive("Add");
  });

  return (
    <List>
      {list.map((item) => (
        <li key={item.label}>
          <NavItem
            onClick={() => {
              setActive(item.label);
              dispatch({
                type: InspectionActionTypes.reset,
              });
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
