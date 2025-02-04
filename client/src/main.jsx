import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import AddMember from "./pages/AddMember.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes >
      <Route path="*" element={<h1>Not Found</h1>}/>
      <Route path="/" element={<App />} />
      <Route path="addmember" element={<AddMember></AddMember>}></Route>
    </Routes>
  </BrowserRouter>
);
