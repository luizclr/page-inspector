import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Inspection } from "~/entities/inspection";
import {
  ReloadButton,
  ResultList,
  ResultListItem,
  Title,
  Wrapper,
} from "~/pages/search/search.styles";
import { useInspection } from "~/providers/inspection/inspection";
import { InspectionActionTypes } from "~/reducers/inspector/types";
import { isNil } from "~/utils";

export const Search: React.FC = () => {
  const [selectedInspection, setSelectedInspection] = useState<Inspection | null>(null);
  const { inspectionService, inspectionDispatch } = useInspection();
  const { state } = useLocation();

  useEffect(() => {
    const getInspection = async (id: string): Promise<void> => {
      try {
        inspectionDispatch({
          type: InspectionActionTypes.loading,
          payload: {
            isLoading: true,
          },
        });
        const { data } = await inspectionService.getInspection({ id });

        setSelectedInspection(data);
        inspectionDispatch({
          type: InspectionActionTypes.add,
          payload: {
            inspection: data,
          },
        });
      } catch (error) {
        inspectionDispatch({
          type: InspectionActionTypes.error,
        });
      }
    };

    if (!isNil(state?.id)) {
      void getInspection(state.id);
    }
  }, [state]);

  return (
    <div>
      <Title>Search</Title>
      <Wrapper>
        <div>
          <ReloadButton>reload</ReloadButton>
        </div>
        <ResultList>
          {selectedInspection?.urls.map((el) => (
            <ResultListItem key={el}>
              <a target="_blank" href={el} rel="noreferrer">
                {el}
              </a>
            </ResultListItem>
          ))}
        </ResultList>
      </Wrapper>
    </div>
  );
};
