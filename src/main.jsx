import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { appStore } from "./store/appStore";
import { Provider } from "react-redux";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </StrictMode>
);
