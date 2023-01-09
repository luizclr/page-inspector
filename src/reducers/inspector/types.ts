import { Inspection } from "~/entities/inspection";

export enum InspectionActionTypes {
  add = "ADD_INSPECTION",
  remove = "REMOVE_INSPECTION",
  loading = "LOADING_INSPECTION",
  error = "ERROR_INSPECTION",
}

export interface AddInspectionAction {
  type: InspectionActionTypes.add;
  payload: {
    inspection: Inspection;
  };
}

export interface RemoveInspectionAction {
  type: InspectionActionTypes.remove;
  payload: {
    id: string;
  };
}

export interface LoadingInspectionAction {
  type: InspectionActionTypes.loading;
}

export interface ErrorInspectionAction {
  type: InspectionActionTypes.error;
}

export type InspectionAction =
  | AddInspectionAction
  | RemoveInspectionAction
  | LoadingInspectionAction
  | ErrorInspectionAction;
