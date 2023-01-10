import { Inspection } from "~/entities/inspection";

export enum InspectionActionTypes {
  add = "ADD_INSPECTION",
  addId = "ADD_INSPECTION_ID",
  loading = "LOADING_INSPECTION",
  error = "ERROR_INSPECTION",
  reset = "RESET_INSPECTION",
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

export interface ResetInspectionAction {
  type: InspectionActionTypes.reset;
}

export type InspectionAction =
  | AddInspectionAction
  | LoadingInspectionAction
  | ErrorInspectionAction
  | ResetInspectionAction;
