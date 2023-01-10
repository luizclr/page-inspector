import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SingleInputForm } from "~/components/single-input-form/single-input-form";
import { Title } from "~/pages/add/add.styles";
import { useInspection } from "~/providers/inspection/inspection";
import { InspectionActionTypes } from "~/reducers/inspector/types";

export const Add: React.FC = () => {
  const { inspectionService, dispatch } = useInspection();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleClick = async (text: string): Promise<void> => {
    try {
      dispatch({
        type: InspectionActionTypes.loading,
        payload: {
          isLoading: true,
        },
      });
      const { data } = await inspectionService.addInspection({ keyword: text });

      navigate("/search", {
        state: {
          key: text,
          id: data.id,
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
      <Title>Add</Title>
      <SingleInputForm buttonText="ADD" handleClick={handleClick} placeholder="e.g.: security" />
    </div>
  );
};
