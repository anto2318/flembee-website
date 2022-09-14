import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";


import { Home, DashboardEvents, DashboardSpaces, Schedule, CreateEvent, CreateSpace, Wallet} from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard/events" element={<DashboardEvents />} />
      <Route path="/dashboard/spaces" element={<DashboardSpaces />} />
      <Route path="/dashboard/create-event" element={<CreateEvent />} />
      <Route path="/dashboard/create-space" element={<CreateSpace />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  );
};

export default Routers;