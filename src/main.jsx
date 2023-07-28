import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* wrapped whole app by redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
