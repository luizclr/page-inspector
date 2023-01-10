import { PropsWithChildren, ReactElement, useContext, useMemo, useReducer } from "react";

import InspectionContext, { initialState } from "~/contexts/inspection/inspection";
import { InspectionStateType } from "~/contexts/inspection/types";
import { InspectionReducer } from "~/reducers/inspector/inspector";

export const InspectionProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [{ isLoading, error, inspection, inspectionService }, dispatch] = useReducer(
    InspectionReducer,
    initialState
  );

  const value = useMemo(
    () => ({
      isLoading,
      error,
      inspection,
      inspectionService,
      dispatch,
    }),
    [inspection, isLoading, error]
  );

  return <InspectionContext.Provider value={value}>{children}</InspectionContext.Provider>;
};

export const useInspection = (): InspectionStateType => useContext(InspectionContext);
