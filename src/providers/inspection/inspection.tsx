import { PropsWithChildren, ReactElement, useContext, useReducer } from "react";

import InspectionContext, { initialState } from "~/contexts/inspection/inspection";
import { InspectionStateType } from "~/contexts/inspection/types";
import { InspectionReducer } from "~/reducers/inspector/inspector";

export const InspectionProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [{ isLoading, error, inspections, inspectionService }, inspectionDispatch] = useReducer(
    InspectionReducer,
    initialState
  );

  return (
    <InspectionContext.Provider
      value={{
        isLoading,
        error,
        inspections,
        inspectionService,
        inspectionDispatch,
      }}
    >
      {children}
    </InspectionContext.Provider>
  );
};

export const useInspection = (): InspectionStateType => useContext(InspectionContext);
