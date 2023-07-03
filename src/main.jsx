import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import store from "./redux/store";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
