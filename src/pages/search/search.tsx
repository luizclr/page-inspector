import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { SingleInputForm } from "~/components/single-input-form/single-input-form";
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
  const { inspectionService, dispatch } = useInspection();
  const { state } = useLocation();

  useEffect(() => {
    if (!isNil(state?.id)) {
      void getInspection(state.id);
    }
  }, [state]);

  const getInspection = async (id: string): Promise<void> => {
    try {
      dispatch({
        type: InspectionActionTypes.loading,
        payload: {
          isLoading: true,
        },
      });
      const { data } = await inspectionService.getInspection({ id });

      setSelectedInspection(data);
      dispatch({
        type: InspectionActionTypes.add,
        payload: {
          inspection: data,
        },
      });
    } catch (error) {
      dispatch({
        type: InspectionActionTypes.error,
      });
    }
  };

  return (
    <div>
      <Title>Search</Title>
      <SingleInputForm
        buttonText="SEARCH"
        handleClick={async (text) => {
          await getInspection(text);
        }}
        placeholder="e.g.: hNrn6rCp"
      />
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
