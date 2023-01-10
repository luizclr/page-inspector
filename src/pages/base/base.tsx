import { PropsWithChildren, ReactElement } from "react";

import search from "~/assets/img/search.png";
import { CardShadowSize, CardSize } from "~/components/card/types";
import { NavList } from "~/components/nav-list/nav-list";
import { NavItem } from "~/components/nav-list/types";
import {
  BaseCard,
  BasePage,
  ErrorBar,
  SearchIcon,
  Title,
  TitleWrapper,
} from "~/pages/base/base.styles";
import { useInspection } from "~/providers/inspection/inspection";

export const Base = ({ children }: PropsWithChildren): ReactElement => {
  const { error } = useInspection();
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
          <BaseCard shadowSize={CardShadowSize.lg} size={CardSize.xg}>
            <div>{children}</div>
            {error && (
              <ErrorBar>
                <p>Something wrong happened. Try again :/</p>
              </ErrorBar>
            )}
          </BaseCard>
        </div>
      </div>
    </BasePage>
  );
};
