import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-dvtx0vpq.us.auth0.com"
      clientId="IJiHFFr6QYUSdH2OHujAdfjINVxB2lBt"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {console.log('hello wrold', document.readyState)}
      <App />
    </Auth0Provider>
    ,{" "}
  </React.StrictMode>
);
