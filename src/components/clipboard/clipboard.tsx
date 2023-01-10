import React, { useState } from "react";

import copy from "~/assets/img/copy.png";
import {
  Alert,
  Button,
  ButtonWrapper,
  Container,
  Icon,
  Label,
} from "~/components/clipboard/clipboard.styles";
import { ClipboardProps } from "~/components/clipboard/types";
import { isEmpty } from "~/utils";

export const Clipboard: React.FC<ClipboardProps> = ({
  show,
  text,
  label = "",
  alertText,
}: ClipboardProps) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleClick = async (): Promise<void> => {
    await navigator.clipboard.writeText(text);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  return (
    <>
      {show ? (
        <Container>
          {!isEmpty(label) && <Label>{label}</Label>}
          <ButtonWrapper>
            <Button onClick={handleClick}>
              {text}
              <Icon src={copy} />
            </Button>
            <Alert show={showAlert}>{alertText}</Alert>
          </ButtonWrapper>
        </Container>
      ) : null}
    </>
  );
};
