import { useState } from "react";

import { Clipboard } from "~/components/clipboard/clipboard";
import { SingleInputForm } from "~/components/single-input-form/single-input-form";
import { Title } from "~/pages/add/add.styles";
import { useInspection } from "~/providers/inspection/inspection";
import { InspectionActionTypes } from "~/reducers/inspector/types";
import { isEmpty } from "~/utils";

export const Add: React.FC = () => {
  const { inspectionService, dispatch } = useInspection();
  const [id, setId] = useState<string>("");

  const handleClick = async (text: string): Promise<void> => {
    try {
      dispatch({
        type: InspectionActionTypes.loading,
        payload: {
          isLoading: true,
        },
      });
      const { data } = await inspectionService.addInspection({ keyword: text });

      setId(data.id);

      dispatch({
        type: InspectionActionTypes.loading,
        payload: {
          isLoading: false,
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
      <Clipboard
        label="Word added with success! copy this code, go to 'search' page and search for it."
        show={!isEmpty(id)}
        alertText="Copied!"
        text={id}
      />
    </div>
  );
};
