import { render } from "@testing-library/react";

import { Card } from "~/components/card/card";
import { CardSize, CardStyle } from "~/components/card/types";

describe("<Card />", () => {
  describe("CardSize", () => {
    it("should be able to mount <Card /> with small size", async () => {
      // given
      const { asFragment } = render(<Card size={CardSize.sm} />);
      // when
      const sut = asFragment();

      // then
      expect(sut).toBeTruthy();
    });

    it("should be able to mount <Base /> with medium size", async () => {
      // given
      const { asFragment } = render(<Card size={CardSize.md} />);
      // when
      const sut = asFragment();
      // then
      expect(sut).toBeTruthy();
    });

    it("should be able to mount <Base /> with large size", async () => {
      // given
      const { asFragment } = render(<Card size={CardSize.lg} />);
      // when
      const sut = asFragment();
      // then
      expect(sut).toBeTruthy();
    });

    it("should be able to mount <Base /> with extra large size", async () => {
      // given
      const { asFragment } = render(<Card size={CardSize.xg} />);
      // when
      const sut = asFragment();
      // then
      expect(sut).toBeTruthy();
    });
  });

  describe("CardStyle", () => {
    it("should be able to mount <Card /> with light style", async () => {
      // given
      const { asFragment } = render(<Card cardStyle={CardStyle.light} />);
      // when
      const sut = asFragment();

      // then
      expect(sut).toBeTruthy();
    });

    it("should be able to mount <Base /> with dark style", async () => {
      // given
      const { asFragment } = render(<Card cardStyle={CardStyle.dark} />);

      // when
      const sut = asFragment();
      // then
      expect(sut).toBeTruthy();
    });
  });
});
