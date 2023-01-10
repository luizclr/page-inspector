import { Inspection } from "~/entities/inspection";

export enum InspectionActionTypes {
  add = "ADD_INSPECTION",
  loading = "LOADING_INSPECTION",
  error = "ERROR_INSPECTION",
}

export interface AddInspectionAction {
  type: InspectionActionTypes.add;
  payload: {
    inspection: Inspection;
  };
}

export interface LoadingInspectionAction {
  type: InspectionActionTypes.loading;
  payload: {
    isLoading: boolean;
  };
}

export interface ErrorInspectionAction {
  type: InspectionActionTypes.error;
}

export type InspectionAction =
  | AddInspectionAction
  | LoadingInspectionAction
  | ErrorInspectionAction;
