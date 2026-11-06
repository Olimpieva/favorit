import "./shared/polyfills/object-group-by";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App, ErrorBoundary } from "./app";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
