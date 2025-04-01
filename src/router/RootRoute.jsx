import React from "react";
import { Routes, Route } from "react-router";

import Layout from "../layout/Layout";
import Homepage from "../pages/HomePage/HomePage";
import Preface from "../pages/Preface/Preface";
import WhatIsMoney from "../pages/WhatIsMoney/WhatIsMoney";
import Debt from "../pages/Debt/Debt";
import GoldToBitcoin from "../pages/GoldToBitcoin/GoldToBitcoin";
const RootRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/preface" element={<Preface />} />
        <Route path="/what-is-money" element={<WhatIsMoney />} />
        <Route path="/debt" element={<Debt />} />
        <Route path="/gold-to-bitcoin" element={<GoldToBitcoin />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
