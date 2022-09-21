import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";


import { Home, About, DashboardSpaces, Schedule, CreateEvent, CreateSpace} from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard/spaces" element={<DashboardSpaces />} />
      <Route path="/dashboard/create-event" element={<CreateEvent />} />
      <Route path="/dashboard/create-space" element={<CreateSpace />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
};

export default Routers;