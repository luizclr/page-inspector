import { SingleInputForm } from "~/components/single-input-form/single-input-form";
import { ResultList, ResultListItem, Title } from "~/pages/search/search.styles";
import { useInspection } from "~/providers/inspection/inspection";
import { InspectionActionTypes } from "~/reducers/inspector/types";
import { isNil } from "~/utils";

export const Search: React.FC = () => {
  const { inspection, inspectionService, dispatch } = useInspection();

  const getInspection = async (id: string): Promise<void> => {
    dispatch({
      type: InspectionActionTypes.reset,
    });

    try {
      dispatch({
        type: InspectionActionTypes.loading,
        payload: {
          isLoading: true,
        },
      });
      const { data } = await inspectionService.getInspection({ id });

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
        handleClick={getInspection}
        placeholder="e.g.: hNrn6rCp"
      />
      <ResultList>
        {!isNil(inspection) && (
          <>
            <p>Urls:</p>
            {inspection?.urls.map((el) => (
              <ResultListItem key={el}>
                <a target="_blank" href={el} rel="noreferrer">
                  {el}
                </a>
              </ResultListItem>
            ))}
          </>
        )}
      </ResultList>
    </div>
  );
};
