import { AxiosResponse } from "axios";

import { Inspection } from "~/entities/inspection";

export type addInspectionRequest = {
  keyword: string;
};

export type addInspectionResponse = AxiosResponse<{
  id: string;
}>;

export type getInspectionRequest = {
  id: string;
};

export type getInspectionResponse = AxiosResponse<Inspection>;
