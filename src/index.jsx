// Import React's StrictMode for highlighting potential problems in an application
import { StrictMode } from "react";

// Import createRoot from ReactDOM to enable the new root API (React 18+)
import { createRoot } from "react-dom/client";

// Import the main App component of the application
import App from "./App";

// Create a root container and render the App component inside React's StrictMode
// StrictMode helps identify issues during development by activating additional checks and warnings
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
