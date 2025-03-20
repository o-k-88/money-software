import React from "react";
import { Routes, Route } from "react-router";
import Homepage from "../pages/Homepage";

import Layout from "../layout/Layout";
const RootRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
