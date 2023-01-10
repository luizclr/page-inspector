import { InspectionStateType } from "~/contexts/inspection/types";
import { InspectionAction, InspectionActionTypes } from "~/reducers/inspector/types";

export const InspectionReducer = (
  state: InspectionStateType,
  action: InspectionAction
): InspectionStateType => {
  switch (action.type) {
    case InspectionActionTypes.loading:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case InspectionActionTypes.error:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    case InspectionActionTypes.add:
      return {
        ...state,
        isLoading: false,
        inspection: action.payload.inspection,
      };
    case InspectionActionTypes.reset:
      return {
        ...state,
        isLoading: false,
        inspection: undefined,
        error: false,
      };
    default:
      return state;
  }
};
