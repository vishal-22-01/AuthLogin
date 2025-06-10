import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <Auth0Provider
  //   domain="dev-2cni2i7n2onwti36.us.auth0.com"
  //   clientId="hA5VmzXLtrfrCBGUZ4xAUBfOhfwIPfw0"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
  // </Auth0Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
