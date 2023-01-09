import { AxiosResponse } from "axios";

import httpClient from "~/config/axios";
import { Inspection } from "~/entities/inspection";
import {
  addInspectionRequest,
  addInspectionResponse,
  getInspectionRequest,
  getInspectionResponse,
} from "~/services/inspection-service/types";

export default class InspectionService {
  async addInspection(request: addInspectionRequest): Promise<addInspectionResponse> {
    return await httpClient.post("/crawl", request);
  }

  async getInspection(request: getInspectionRequest): Promise<getInspectionResponse> {
    const response: AxiosResponse<Inspection> = await httpClient.get(`/crawl/${request.id}`);

    return response;
  }
}
