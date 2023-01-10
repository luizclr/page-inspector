import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Input, Title, Wrapper } from "~/pages/add/add.styles";
import { useInspection } from "~/providers/inspection/inspection";
import { InspectionActionTypes } from "~/reducers/inspector/types";
import { isEmpty } from "~/utils";

export const Add: React.FC = () => {
  const [text, setText] = useState<string>("");
  const { inspectionService, inspectionDispatch } = useInspection();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleClick = async (): Promise<void> => {
    try {
      inspectionDispatch({
        type: InspectionActionTypes.loading,
        payload: {
          isLoading: true,
        },
      });
      const { data } = await inspectionService.addInspection({ keyword: text });

      setText("");
      navigate("/search", {
        state: {
          key: text,
          id: data.id,
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
      <Title>Add</Title>
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
