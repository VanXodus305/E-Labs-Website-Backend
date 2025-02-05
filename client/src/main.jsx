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
            <div className="text-5xl font-bold text-textColor1 h-screen w-full justify-center items-center flex">
              Not Found
            </div>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
