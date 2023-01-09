import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { AddSearch } from "~/pages/add-search/add-search";
import { Searches } from "~/pages/searches/searches";

export const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route index path="/" element={<AddSearch />} />
      <Route path="/searches" element={<Searches />} />
    </Routes>
  );
};
