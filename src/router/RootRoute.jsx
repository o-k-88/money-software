import React from "react";
import { Routes, Route } from "react-router";

import Layout from "../layout/Layout";
import LayoutPage from "../layout/LayoutPage";
import Homepage from "../pages/HomePage/HomePage";
import Preface from "../pages/Preface/Preface";
import WhatIsMoney from "../pages/WhatIsMoney/WhatIsMoney";
import Debt from "../pages/Debt/Debt";
import GoldToBitcoin from "../pages/GoldToBitcoin/GoldToBitcoin";
import MonetarySystem from "../pages/MonetarySystem/MonetarySystem";

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route element={<LayoutPage />}>
        <Route path="/preface" element={<Preface />} />
<<<<<<< HEAD
        <Route path="/what-is-money" element={<WhatIsMoney />} />
        <Route path="/debt-as-money" element={<Debt />} />
=======
        <Route path="/debt-as-money" element={<WhatIsMoney />} />
        <Route path="/debt" element={<Debt />} />
>>>>>>> dark
        <Route path="/gold-to-bitcoin" element={<GoldToBitcoin />} />
        <Route path="/monetary-system" element={<MonetarySystem />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
