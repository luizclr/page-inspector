import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Add } from "~/pages/add/add";

describe("<AddSearch />", () => {
  it("should be able to mount <AddSearch /> component", async () => {
    // given
    const { asFragment } = render(
      <BrowserRouter>
        <Add />
      </BrowserRouter>
    );

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });
});
