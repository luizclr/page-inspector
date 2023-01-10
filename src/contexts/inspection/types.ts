import { Dispatch } from "react";

import { Inspection } from "~/entities/inspection";
import { InspectionAction } from "~/reducers/inspector/types";
import InspectionService from "~/services/inspection/inspection";

export type InspectionStateType = {
  isLoading: boolean;
  error: boolean;
  inspection?: Inspection;
  inspectionService: InspectionService;
  dispatch: Dispatch<InspectionAction>;
};
