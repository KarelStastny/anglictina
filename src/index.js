import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { EnglishContextProvider } from "./context/EnglishContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <EnglishContextProvider>
      <App />
    </EnglishContextProvider>
  </BrowserRouter>
);
