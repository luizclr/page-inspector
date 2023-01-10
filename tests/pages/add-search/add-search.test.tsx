import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { AddSearch } from "~/pages/add-search/add-search";

describe("<AddSearch />", () => {
  it("should be able to mount <AddSearch /> component", async () => {
    // given
    const { asFragment } = render(
      <BrowserRouter>
        <AddSearch />
      </BrowserRouter>
    );

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });
});
