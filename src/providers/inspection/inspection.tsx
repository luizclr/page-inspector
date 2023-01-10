import { PropsWithChildren, ReactElement, useContext, useMemo, useReducer } from "react";

import InspectionContext, { initialState } from "~/contexts/inspection/inspection";
import { InspectionStateType } from "~/contexts/inspection/types";
import { InspectionReducer } from "~/reducers/inspector/inspector";

export const InspectionProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [{ isLoading, error, inspections, inspectionService }, inspectionDispatch] = useReducer(
    InspectionReducer,
    initialState
  );

  const value = useMemo(
    () => ({
      isLoading,
      error,
      inspections,
      inspectionService,
      inspectionDispatch,
    }),
    [inspections, isLoading, error]
  );

  return <InspectionContext.Provider value={value}>{children}</InspectionContext.Provider>;
};

export const useInspection = (): InspectionStateType => useContext(InspectionContext);
