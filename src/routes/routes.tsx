import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { Add } from "~/pages/add/add";
import { Search } from "~/pages/search/search";

export const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route index path="/" element={<Add />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
