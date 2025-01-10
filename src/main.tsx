import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Toaster } from "@/components/ui/toaster";
import "./index.css";
import { AuthProvider } from "./context/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <App />
          <Toaster />
        </AuthProvider>
      </BrowserRouter>
  // </React.StrictMode>
);
