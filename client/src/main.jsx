import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import AddMember from "./pages/AddMember.jsx";
import Layout from "./layouts/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="addmember" element={<AddMember></AddMember>}></Route>
        <Route
          path="*"
          element={
            <h1 className="font-bold text-5xl text-textColor1">Not Found</h1>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
