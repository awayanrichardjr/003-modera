import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import "./style/index.css";

// global css
import "./style/global/global.css";
import "./style/global/root.css";
import "./style/global/fonts.css";

// components
import Nav from "./components/navigation/App.jsx";
import Header from "./components/header/App.jsx";

const view = (
  <StrictMode>
    <Nav />
    <Header />
  </StrictMode>
);
createRoot(document.getElementById("root")).render(view);
