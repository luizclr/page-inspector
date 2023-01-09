import { createContext, Dispatch } from "react";

import { InspectionStateType } from "~/contexts/inspection/types";
import { InspectionAction } from "~/reducers/inspector/types";
import InspectionService from "~/services/inspection-service/inspection-service";

export const initialState: InspectionStateType = {
  isLoading: false,
  error: false,
  inspections: [],
  inspectionService: new InspectionService(),
  inspectionDispatch: (() => undefined) as Dispatch<InspectionAction>,
};

const InspectionContext = createContext<InspectionStateType>(initialState);

export default InspectionContext;
