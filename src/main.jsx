import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Index } from "./page/index.jsx";
import { Navbar } from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Index />
  </React.StrictMode>
);
