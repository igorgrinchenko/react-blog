import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Home from "./pages/Home";
import ArticleDetails from "./pages/ArticleDetails";
import Login from "./pages/Login";

import { getArticles } from "./services/api";
import { useEffect } from "react";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedLayout />}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
