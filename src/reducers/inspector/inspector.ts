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
        inspections: [action.payload.inspection, ...state.inspections],
      };
    case InspectionActionTypes.remove:
      return {
        ...state,
        inspections: state.inspections.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
