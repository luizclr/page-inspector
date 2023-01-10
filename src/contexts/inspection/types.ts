import { Dispatch } from "react";

import { Inspection } from "~/entities/inspection";
import { InspectionAction } from "~/reducers/inspector/types";
import InspectionService from "~/services/inspection/inspection";

export type InspectionStateType = {
  isLoading: boolean;
  error: boolean;
  inspections: Inspection[];
  inspectionService: InspectionService;
  inspectionDispatch: Dispatch<InspectionAction>;
};
