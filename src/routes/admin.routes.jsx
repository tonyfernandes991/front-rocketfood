import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { New } from "../pages/New";
import { ToEdit } from "../pages/ToEdit";
import { Details } from "../pages/Details";


export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<New/>} />
      <Route path="/edit/:id" element={<ToEdit/>} />
      <Route path="/dish/:id" element={<Details/>} />

      <Route path="*" element={< Navigate to="/" /> }/>
    </Routes>
  );
}