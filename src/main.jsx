import "./shared/polyfills/object-group-by";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
