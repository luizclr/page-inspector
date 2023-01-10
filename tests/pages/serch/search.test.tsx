import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Search } from "~/pages/search/search";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: { key: faker.random.word(), id: faker.random.alphaNumeric(8) },
  }),
}));

describe("<Search />", () => {
  it("should be able to mount <Search /> component", async () => {
    // given
    const { asFragment } = render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });
});
