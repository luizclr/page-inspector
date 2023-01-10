export enum InspectionStatus {
  active = "active",
  done = "done",
}

export interface Inspection {
  id: string;
  status: InspectionStatus;
  urls: string[];
}

export interface InspectionKeyMap {
  key: string;
  value: string;
}
