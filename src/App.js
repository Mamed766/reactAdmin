import React from "react";
import Header from "./featured/header/header.featured";
import Layout from "./featured/layout/Layout.featured";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Joblist from "./pages/Joblist.page";
import Jobgrid from "./pages/Jobgrid.page";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Joblist />} />
          <Route path="/job-list" element={<Joblist />} />
          <Route path="/job-grid" element={<Jobgrid />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
