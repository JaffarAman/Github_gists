import React from "react";
import { Route, Routes } from "react-router-dom";
import { GistDetail, GistsList, SearchGist } from "../pages";

const Approutes = () => {
  return (
    <Routes>
      <Route index element={<SearchGist />} />
      <Route path="gistlist/:user" element={<GistsList />} />
      <Route path="gistdetail/:gistId" element={<GistDetail />} />
    </Routes>
  );
};

export default Approutes;
