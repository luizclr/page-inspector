import { ReactElement } from "react";

import { Card as CardComponent } from "~/components/card/card.styles";
import { CardProps, CardShadowSize, CardStyle } from "~/components/card/types";

export const Card = ({
  children,
  cardStyle = CardStyle.light,
  shadowSize = CardShadowSize.sm,
  onClick = undefined,
  ...props
}: CardProps): ReactElement => {
  return (
    <CardComponent onClick={onClick} cardStyle={cardStyle} shadowSize={shadowSize} {...props}>
      {children}
    </CardComponent>
  );
};
