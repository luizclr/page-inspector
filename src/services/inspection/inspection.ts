import { AxiosInstance, AxiosResponse } from "axios";

import { Inspection } from "~/entities/inspection";
import {
  addInspectionRequest,
  addInspectionResponse,
  getInspectionRequest,
  getInspectionResponse,
} from "~/services/inspection/types";

export default class InspectionService {
  constructor(private readonly httpClient: AxiosInstance) {}

  async addInspection(request: addInspectionRequest): Promise<addInspectionResponse> {
    return await this.httpClient.post("/crawl", request);
  }

  async getInspection(request: getInspectionRequest): Promise<getInspectionResponse> {
    const response: AxiosResponse<Inspection> = await this.httpClient.get(`/crawl/${request.id}`);

    return response;
  }
}
