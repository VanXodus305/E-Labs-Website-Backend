import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
// import App from "./App.jsx";
import Layout from "./layouts/Layout.jsx";
import AddEvent from "./pages/AddEvent.jsx";
import AddMember from "./pages/AddMember.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="addmember" element={<AddMember />}></Route>
        <Route path="addevent" element={<AddEvent />}></Route>
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
