import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Toaster } from 'sonner'
import "./index.css";
import { AuthProvider } from "./context/auth-context";

const root = ReactDOM.createRoot(
  document.getElementById("root")!).render(
  // <React.StrictMode>
    // <Router>
    //   <AuthProvider>
    //     <App />
    //   </AuthProvider>
    // </Router>
    <BrowserRouter>
      <Toaster position='top-right' richColors duration={2000}/>
          <AuthProvider>
            <App />
          </AuthProvider>
    </BrowserRouter>

)
