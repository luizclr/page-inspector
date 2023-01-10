import { faker } from "@faker-js/faker";
import { fireEvent, render, waitForElementToBeRemoved } from "@testing-library/react";

import { Clipboard } from "~/components/clipboard/clipboard";

describe("<Clipboard />", () => {
  Object.assign(navigator, {
    clipboard: {
      writeText: jest.fn(),
    },
  });

  it("should be able to mount <Clipboard /> component", async () => {
    // given
    const text = faker.random.word();
    const alertText = faker.random.word();
    const { getByText, getByRole } = render(
      <Clipboard text={text} show={true} alertText={alertText} />
    );
    const button = getByRole("button");
    // when
    fireEvent.click(button);
    const alert = getByText(alertText);

    // then
    expect(alert).toBeTruthy();
    expect(navigator.clipboard.writeText).toBeCalled();
    expect(waitForElementToBeRemoved(alert)).toBeTruthy();
  });
});
