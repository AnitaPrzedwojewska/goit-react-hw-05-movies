import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { IsBackProvider } from "./context/IsBackProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-05-movies'>
      <IsBackProvider>
        <App />
      </IsBackProvider>
    </BrowserRouter>
  </React.StrictMode>
);
