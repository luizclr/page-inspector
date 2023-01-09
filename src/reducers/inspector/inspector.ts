import { InspectionStateType } from "~/contexts/inspection/types";
import { InspectionAction, InspectionActionTypes } from "~/reducers/inspector/types";

export const InspectionReducer = (
  state: InspectionStateType,
  action: InspectionAction
): InspectionStateType => {
  switch (action.type) {
    case InspectionActionTypes.add:
      return {
        ...state,
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
