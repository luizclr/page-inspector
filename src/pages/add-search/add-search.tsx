import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Input, Title, Wrapper } from "~/pages/add-search/add-search.styles";
import { useInspection } from "~/providers/inspection/inspection";
import { InspectionActionTypes } from "~/reducers/inspector/types";
import { isEmpty } from "~/utils";

export const AddSearch: React.FC = () => {
  const [text, setText] = useState<string>("");
  const { inspectionService, inspectionDispatch } = useInspection();
  const navigate = useNavigate();

  const handleClick = async (): Promise<void> => {
    try {
      inspectionDispatch({
        type: InspectionActionTypes.loading,
        payload: {
          isLoading: true,
        },
      });
      const { data } = await inspectionService.addInspection({ keyword: text });

      navigate("/searches", {
        state: {
          key: text,
          id: data.id,
        },
      });
      setText("");
    } catch (error) {
      inspectionDispatch({
        type: InspectionActionTypes.error,
      });
    }
  };

  return (
    <div>
      <Title>Add Search</Title>
      <Wrapper>
        <Input
          type="text"
          placeholder="e.g: security"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button disabled={isEmpty(text)} onClick={handleClick} type="submit">
          ADD
        </Button>
      </Wrapper>
    </div>
  );
};
