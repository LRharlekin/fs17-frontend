import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import reportWebVitals from './reportWebVitals';

import App from "./App";
import store, { persistor } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
if (!root) throw new Error("Root element not found");

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

/* If you want to start measuring performance in your app, pass a function
to log results (for example: reportWebVitals(console.log))
or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */
// reportWebVitals();
