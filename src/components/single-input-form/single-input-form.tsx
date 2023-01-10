import { useState } from "react";

import { Button, Input, Wrapper } from "~/components/single-input-form/single-input-form.styles";
import { SingleInputFormProps } from "~/components/single-input-form/types";
import { isEmpty } from "~/utils";

// const SingleInputFormBase: React.FC<SingleInputFormProps> = ({
export const SingleInputForm: React.FC<SingleInputFormProps> = ({
  buttonText,
  placeholder = "",
  handleClick,
}: SingleInputFormProps) => {
  const [text, setText] = useState<string>("");

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        disabled={isEmpty(text)}
        onClick={async () => {
          await handleClick(text);
          setText("");
        }}
        type="submit"
      >
        {buttonText}
      </Button>
    </Wrapper>
  );
};

// export const SingleInputForm = useMemo(() => SingleInputFormBase, [SingleInputFormBase]);
