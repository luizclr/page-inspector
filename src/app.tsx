import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "~/app.styles";
import { Loading } from "~/components/loading/loading";
import { Base } from "~/pages/base/base";
import { InspectionProvider } from "~/providers/inspection/inspection";
import { AppRoutes } from "~/routes/routes";

export const App = (): ReactElement => (
  <BrowserRouter>
    <GlobalStyle />
    <InspectionProvider>
      <Base>
        <Loading />
        <AppRoutes />
      </Base>
    </InspectionProvider>
  </BrowserRouter>
);
