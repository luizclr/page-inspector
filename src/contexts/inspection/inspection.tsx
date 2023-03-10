import { createContext, Dispatch } from "react";

import axiosClient from "~/config/axios";
import { InspectionStateType } from "~/contexts/inspection/types";
import { InspectionAction } from "~/reducers/inspector/types";
import InspectionService from "~/services/inspection/inspection";

export const initialState: InspectionStateType = {
  isLoading: false,
  error: false,
  inspection: undefined,
  inspectionService: new InspectionService(axiosClient),
  dispatch: (() => undefined) as Dispatch<InspectionAction>,
};

const InspectionContext = createContext<InspectionStateType>(initialState);

export default InspectionContext;
