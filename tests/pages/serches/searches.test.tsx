import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Searches } from "~/pages/searches/searches";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: { id: "id" },
  }),
}));

describe("<Searches />", () => {
  it("should be able to mount <Searches /> component", async () => {
    // given
    const { asFragment } = render(
      <BrowserRouter>
        <Searches />
      </BrowserRouter>
    );

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });
});
