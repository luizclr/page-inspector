import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { CardShadowSize, CardStyle } from "~/components/card/types";
import { Inspection } from "~/entities/inspection";
import {
  ReloadButton,
  RemoveButton,
  ResultList,
  ResultListItem,
  ResultListWrapper,
  SearchList,
  SearchListItem,
  SearchListWrapper,
  Title,
  Wrapper,
} from "~/pages/searches/searches.styles";
import { useInspection } from "~/providers/inspection/inspection";
import { InspectionActionTypes } from "~/reducers/inspector/types";
import { isNil } from "~/utils";

export const Searches: React.FC = () => {
  const [selectedInspection, setSelectedInspection] = useState<Inspection | null>(null);
  const { inspections, inspectionService, inspectionDispatch } = useInspection();
  const { state } = useLocation();

  useEffect(() => {
    if (!isNil(state?.id)) {
      void getInspection(state.id);
    }
  }, []);

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

  return (
    <div>
      <Title>Searches</Title>
      <Wrapper>
        <SearchListWrapper>
          <p>saved:</p>
          <SearchList>
            {inspections.map((el) => (
              <SearchListItem
                onClick={() => {
                  setSelectedInspection(el);
                }}
                key={el.id}
                cardStyle={CardStyle.dark}
                shadowSize={CardShadowSize.sm}
              >
                {el.id}
              </SearchListItem>
            ))}
          </SearchList>
        </SearchListWrapper>
        <ResultListWrapper>
          <div>
            <RemoveButton>remover</RemoveButton>
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
        </ResultListWrapper>
      </Wrapper>
    </div>
  );
};
