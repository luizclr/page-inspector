import { faker } from "@faker-js/faker";
import { HttpStatusCode } from "axios";
import nock from "nock";

import axiosClient from "~/config/axios";
import InspectionService from "~/services/inspection/inspection";

const host = process.env.BASE_URL;

describe("InspectionService", () => {
  beforeEach(() => {
    nock.disableNetConnect();
    nock.cleanAll();
  });

  it("should call API creation method and return valid object", async () => {
    // given
    const keyword = faker.random.word();
    const id = faker.random.alphaNumeric(8);

    nock(host)
      .post("/crawl", { keyword })
      .reply(HttpStatusCode.Ok, { id }, { "Access-Control-Allow-Origin": "*" });
    const sut = new InspectionService(axiosClient);

    // when
    const response = await sut.addInspection({ keyword });

    // then
    expect(response.data.id).toBe(id);
  });

  it("should call API creation method and return valid object", async () => {
    // given
    const keyword = faker.random.word();

    nock(host).post("/crawl", { keyword }).reply(HttpStatusCode.BadRequest);
    const sut = new InspectionService(axiosClient);

    // when
    const promise = sut.addInspection({ keyword });

    // then
    await expect(promise).rejects.toThrow();
  });
});
