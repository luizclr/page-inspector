import { PropsWithChildren, ReactElement } from "react";

import search from "~/assets/img/search.png";
import { Card } from "~/components/card/card";
import { CardShadowSize, CardSize } from "~/components/card/types";
import { NavList } from "~/components/nav-list/nav-list";
import { NavItem } from "~/components/nav-list/types";
import { BasePage, SearchIcon, Title, TitleWrapper } from "~/pages/base/base.styles";

export const Base = ({ children }: PropsWithChildren): ReactElement => {
  const navList: NavItem[] = [
    { to: "/", label: "Add" },
    { to: "/search", label: "Search" },
  ];

  return (
    <BasePage>
      <div>
        <TitleWrapper>
          <SearchIcon src={search} />
          <Title>Page Inspector</Title>
        </TitleWrapper>
        <div>
          <NavList list={navList} />
          <Card shadowSize={CardShadowSize.lg} size={CardSize.xg}>
            <div>{children}</div>
          </Card>
        </div>
      </div>
    </BasePage>
  );
};
